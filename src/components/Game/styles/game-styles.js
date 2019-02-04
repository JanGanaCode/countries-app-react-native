import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const GameWrapper = styled.View`
  flex: 1;
  background-color: #f2f2f3;
  padding: 5px 10px;
`;

export const Flag = Animatable.createAnimatableComponent(styled.Image`
  flex: 1;
  width: 150;
  height: 80;
  margin: 20px auto;
  border-radius: 5px;
  border-width: 10px;
  border-color: #fff;
`);

export const OptionsWrapper = styled.View`
  flex: 2;
`;

export const Option = Animatable.createAnimatableComponent(styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  flex: 1;
  background: ${props =>
    props.selectedStyleClass === 'selected' ? '#3d9dff' : '#fff'};
  border-radius: 5px;
  padding: 0 30px;
  border: ${props =>
    props.selectedStyleClass === 'selected'
      ? '2px solid #3d9dff'
      : '2px solid #fff'};
`);

export const OptionLabel = styled.Text`
  color: ${props =>
    props.selectedStyleClass === 'selected' ? '#fff' : '#9fa3b1'};
  margin: 0 auto;
  font-size: ${props =>
    props.selectedStyleClass === 'selected' ? '20' : '16'};
  font-weight: ${props =>
    props.selectedStyleClass === 'selected' ? '700' : '300'};
  text-align: center;
`;
