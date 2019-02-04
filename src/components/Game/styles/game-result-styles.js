import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const GameResultWrapper = styled.View`
  flex: 1;
  background-color: #f2f2f3;
  padding: 10px;
`;

export const Score = Animatable.createAnimatableComponent(styled.Text`
  margin: 0 auto;
  flex: 2;
  padding: 30px 30px 0 30px;
  text-align: center;
  font-size: 24;
`);

export const Bold = Animatable.createAnimatableComponent(styled.Text`
  font-weight: 700;
  font-size: 30;
  color: #3d9dff;
`);

export const Graphics = Animatable.createAnimatableComponent(styled.View`
  flex: 6;
  margin: 10px 0 50px 0;
  justify-content: center;
`);

export const Emoji = Animatable.createAnimatableComponent(styled.Text`
  font-size: 120;
  text-align: center;
  color: #000;
`);

export const ResetQuizButton = Animatable.createAnimatableComponent(styled.TouchableOpacity`
  background-color: #3d9dff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: right;
  padding: 15px 20px;
  flex: 1;
`);

export const ResetQuizLabel = styled.Text`
  color: #fff;
  font-size: 22;
  font-weight: 700;
`;
