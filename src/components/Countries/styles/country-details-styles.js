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

export const WebViewer = styled.WebView`
  border-radius: 5px;
  margin-top: 30px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -20px;
`;

export const ModalFlag = Animatable.createAnimatableComponent(styled.Image`
  height: 100px;
  width: 150px;
  margin: 20px auto;
  border-radius: 5;
  border-color: #f2f2f3;
  border-width: 1;
`);

export const DetailsWrapper = styled.View``;

export const Detail = Animatable.createAnimatableComponent(styled.Text`
  margin: 5px auto;
`);

export const DetailLabel = styled.Text`
  font-weight: bold;
`;

export const LinkWrapper = Animatable.createAnimatableComponent(styled.TouchableOpacity`
  margin: 0 auto;
`);

export const LearnMoreLink = styled.Text`
  padding: 15px 0;
  text-decoration: underline;
  font-style: italic;
`;
