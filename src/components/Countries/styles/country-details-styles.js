import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const ModalInner = styled.View`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 15px;
`;

export const CountryName = Animatable.createAnimatableComponent(styled.Text`
  font-size: 20;
  font-weight: bold;
  text-align: center;
`);

export const DetailsWrapper = styled.View``;

export const Detail = Animatable.createAnimatableComponent(styled.Text`
  margin: 5px auto;
`);

export const DetailLabel = styled.Text`
  font-weight: bold;
`;
