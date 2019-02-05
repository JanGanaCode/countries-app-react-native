import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CountriesList from './../components/Countries/CountriesList';
import {
  SearchBarWrapper,
  SearchBar
} from './../components/Countries/styles/header-searchbar-styles';
import images from './../assets/images/images';

class CountriesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <SearchBarWrapper>
          <SearchBar
            animation='fadeInDown'
            delay={200}
            autoCorrect={false}
            placeholder='Search countries...'
            onChangeText={navigation.getParam('handleChange')}
            placeholderTextColor='#a2a6b4'
          />
        </SearchBarWrapper>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleChange: this.handleChange });
    this.props.navigation.setParams({ clearSearch: this.clearSearch });
  }

  handleChange = text => {
    this.setState({ query: text });
  };

  render() {
    const { query } = this.state;

    return (
      <SafeAreaView>
        <ScrollView>
          <CountriesList query={query} source={images[this.props.image]} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CountriesScreen;
