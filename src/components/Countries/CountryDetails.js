import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {
  ModalInner,
  CountryName,
  ModalFlag,
  WebViewer,
  DetailsWrapper,
  Detail,
  DetailLabel,
  LinkWrapper,
  LearnMoreLink
} from './styles/country-details-styles';

class CountryDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWebView: false
    };
  }

  handleLinkPress = () => {
    this.setState({ showWebView: !this.state.showWebView });
  };

  handleOnBackdropPress = () => {
    this.setState({ showWebView: false });
    this.props.onClose();
  };

  render() {
    const { modalCountry, modalVisible } = this.props;
    const { showWebView } = this.state;

    return (
      <Modal
        isVisible={modalVisible}
        backdropOpacity={1}
        backdropColor='#3d9dff'
        onBackdropPress={this.handleOnBackdropPress}
      >
        {showWebView ? (
          <WebViewer
            source={{
              uri: `https://www.google.com/search?&q=${modalCountry.name}`
            }}
          />
        ) : null}

        {showWebView !== true ? (
          <ModalInner>
            <CountryName animation='zoomIn' duration={700} delay={300}>
              {modalCountry.name}
            </CountryName>
            <ModalFlag
              animation='bounceInDown'
              source={{
                uri: `https://www.jangana.com/apps-assets/flags/${
                  modalCountry.alpha2Code
                }.png`
              }}
            />
            <DetailsWrapper style={{ justifyContent: 'center' }}>
              <Detail animation='fadeInRight' delay={100} duration={500}>
                <DetailLabel>Capital:</DetailLabel> {modalCountry.capital}
              </Detail>
              <Detail animation='fadeInRight' delay={150} duration={500}>
                <DetailLabel>Region:</DetailLabel> {modalCountry.region}
              </Detail>
              <Detail animation='fadeInRight' delay={200} duration={500}>
                <DetailLabel>Population:</DetailLabel> {modalCountry.population}{' '}
                (approx)
              </Detail>
              <Detail animation='fadeInRight' delay={250} duration={500}>
                <DetailLabel>ISO code:</DetailLabel> {modalCountry.alpha2Code}
              </Detail>
              <Detail animation='fadeInRight' delay={300} duration={500}>
                <DetailLabel>Top level domain:</DetailLabel>{' '}
                {modalCountry.topLevelDomain}
              </Detail>
              <Detail animation='fadeInRight' delay={350} duration={500}>
                <DetailLabel>Numeric code:</DetailLabel>{' '}
                {modalCountry.numericCode}
              </Detail>
              <Detail animation='fadeInRight' delay={400} duration={500}>
                <DetailLabel>Native name:</DetailLabel>{' '}
                {modalCountry.nativeName}
              </Detail>
              <Detail animation='fadeInRight' delay={450} duration={500}>
                <DetailLabel>Calling code:</DetailLabel>
                {' +'}
                {modalCountry.callingCodes}
              </Detail>
              <LinkWrapper onPress={this.handleLinkPress}>
                <LearnMoreLink>learn more...</LearnMoreLink>
              </LinkWrapper>
            </DetailsWrapper>
          </ModalInner>
        ) : null}
      </Modal>
    );
  }
}

export default CountryDetails;
