import React, { Component } from 'react';
import { countries } from './../../data/countries';
import CountryDetails from './CountryDetails';
import {
  CountriesListWrapper,
  LoadingWrapper,
  Loading,
  CountriesWrapper,
  CountryWrapper,
  Flag,
  CountryName,
  ModalOpenerWrapper,
  ModalOpener,
  ShowMoreWrapper,
  ShowMoreButton
} from './styles/countries-list-styles';

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      loadNumber: 15,
      modalVisible: false,
      modalCountry: {}
    };
  }

  showMore = () => {
    this.setState({ loadNumber: (this.state.loadNumber += 20) });
  };

  handleSearch = text => {
    this.setState({ query: text });
  };

  setModalVisible() {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  }

  sendData = item => {
    this.setState({ modalCountry: item });
  };

  onClose = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  };

  render() {
    const { isLoading, modalCountry, modalVisible, loadNumber } = this.state;

    const { query } = this.props;

    let filteredCountries = countries.filter(country => {
      return country.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    if (isLoading) {
      return (
        <LoadingWrapper>
          <Loading source={require('./../../assets/loading.gif')} />
        </LoadingWrapper>
      );
    }

    return (
      <CountriesListWrapper>
        <CountryDetails
          modalCountry={modalCountry}
          modalVisible={modalVisible}
          onClose={this.onClose}
        />
        <CountriesWrapper
          data={filteredCountries.splice(0, loadNumber)}
          renderItem={({ item }) => (
            <CountryWrapper
              animation='zoomInUp'
              duration={900}
              delay={item.delay}
            >
              <Flag
                source={{
                  uri: `https://www.jangana.com/apps-assets/flags/${
                    item.alpha2Code
                  }.png`
                }}
              />
              <CountryName>{item.name}</CountryName>
              <ModalOpenerWrapper
                onPress={() => {
                  this.setModalVisible();
                  this.sendData(item);
                }}
              >
                <ModalOpener>●●●</ModalOpener>
              </ModalOpenerWrapper>
            </CountryWrapper>
          )}
          keyExtractor={item => item.numericCode}
        />
        {query === '' ? (
          <ShowMoreWrapper onPress={this.showMore}>
            <ShowMoreButton>Show more...</ShowMoreButton>
          </ShowMoreWrapper>
        ) : null}
      </CountriesListWrapper>
    );
  }
}

export default CountriesList;
