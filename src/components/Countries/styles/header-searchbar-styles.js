import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const SearchBarWrapper = styled.View`
  background: #3d9dff;
  flex-direction: row;
  padding: 50px 10px 15px 10px;
`;

export const SearchBar = Animatable.createAnimatableComponent(styled.TextInput`
  height: 50px;
  padding: 0 15px;
  flex: 5;
  border-radius: 5px;
  background-color: #f2f2f3;
  color: #3d9dff;
  font-size: 20;
  margin: 0 auto;
`);
