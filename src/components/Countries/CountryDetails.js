import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { StyleSheet } from 'react-native';
import Flags from './Flags';
import {
  ModalInner,
  CountryName,
  DetailsWrapper,
  Detail,
  DetailLabel
} from './styles/country-details-styles';

class CountryDetails extends Component {
  handleOnBackdropPress = () => {
    this.setState({ showWebView: false });
    this.props.onClose();
  };

  handleModalSwipe = () => {
    this.handleOnBackdropPress();
  };

  render() {
    const { modalCountry, modalVisible } = this.props;

    return (
      <Modal
        isVisible={modalVisible}
        backdropOpacity={1}
        backdropColor='#3d9dff'
        onBackdropPress={this.handleOnBackdropPress}
        onSwipe={this.handleModalSwipe}
        swipeDirection='left'
        hideModalContentWhileAnimating={true}
        swipeThreshold={5}
      >
        <ModalInner>
          <CountryName animation='zoomIn' duration={700} delay={300}>
            {modalCountry.name}
          </CountryName>
          <Flags
            animation='bounceInDown'
            flagStyle={styles.flagStyle}
            item={modalCountry}
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
              <DetailLabel>Native name:</DetailLabel> {modalCountry.nativeName}
            </Detail>
            <Detail animation='fadeInRight' delay={450} duration={500}>
              <DetailLabel>Calling code:</DetailLabel>
              {' +'}
              {modalCountry.callingCodes}
            </Detail>
          </DetailsWrapper>
        </ModalInner>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  flagStyle: {
    height: 100,
    width: 150,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    borderColor: '#f2f2f3',
    borderWidth: 1
  }
});

export default CountryDetails;
