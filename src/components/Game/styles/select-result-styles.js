import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const ResultWrapper = styled.View`
  flex: 2;
  margin: 5px 0;
  justify-content: center;
  height: 100;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.View`
  flex: 3;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Emoji = Animatable.createAnimatableComponent(styled.Text`
  font-size: 60;
  flex: 2;
  color: #000;
  text-align: center;
`);

export const ResultLabelWrapper = Animatable.createAnimatableComponent(styled.View`
  background-color: #3d9dff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  flex: 2;
  padding: 10px;
`);

export const ResultLabel = styled.Text`
  color: #fff;
  font-size: 18;
  font-weight: 400;
`;
