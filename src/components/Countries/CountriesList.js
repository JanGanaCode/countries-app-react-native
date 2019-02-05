import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { countries } from './../../data/countries';
import CountryDetails from './CountryDetails';
import Flags from './Flags';
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
      modalCountry: {},
      showWebView: false
    };
  }

  showMore = () => {
    this.setState({
      loadNumber: (this.state.loadNumber += 20)
    });
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
    this.setState({ modalVisible: !modalVisible, showWebView: false });
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
              <Flags item={item} flagStyle={styles.flagStyle} />
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

const styles = StyleSheet.create({
  flagStyle: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25,
    borderColor: '#f2f2f3',
    borderWidth: 1
  }
});

export default CountriesList;
