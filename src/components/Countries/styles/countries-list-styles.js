import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const CountriesListWrapper = styled.View`
  padding-top: 30px;
`;

export const SearchBarWrapper = styled.View`
  height: 70px;
  background: #fff;
  flex: 1;
`;

export const SearchBar = styled.TextInput`
  height: 40px;
  margin: 15px 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f2f2f3;
  color: #3d9dff;
`;

export const LoadingWrapper = styled.View`
  margin: 200px 50px;
  align-items: center;
`;

export const Loading = styled.Image`
  height: 70;
  width: 70;
`;

export const CountriesWrapper = styled.FlatList`
  padding: 5px 10px;
  background: #f2f2f3;
  height: 100%;
  flex: 1;
`;

export const CountryWrapper = Animatable.createAnimatableComponent(styled.View`
  flex-direction: row;
  background: #fff;
  margin: 5px 0;
  border-radius: 5px;
  padding: 5px;
  align-items: center;
`);

export const Flag = styled.Image`
  height: 50;
  width: 50;
  margin: 0 10px;
  border-radius: 25;
  border-color: #f2f2f3;
  border-width: 1;
`;

export const CountryName = styled.Text`
  margin: 0 10px;
  color: #a2a6b4;
  font-size: 16;
  flex: 3;
`;

export const ModalOpenerWrapper = styled.TouchableOpacity``;

export const ModalOpener = styled.Text`
  font-size: 11;
  padding: 10px 15px;
  color: lightgrey;
  letter-spacing: 2px;
`;

export const ShowMoreWrapper = styled.TouchableOpacity`
  background-color: #3d9dff;
  margin: 15px 10px 400px 10px;
  border-radius: 5px;
  padding: 5px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 50;
`;

export const ShowMoreButton = styled.Text`
  color: #fff;
  margin: 0 auto;
  font-size: 18;
  font-weight: 700;
`;
