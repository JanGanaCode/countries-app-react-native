import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const OfflineNoticeWrapper = Animatable.createAnimatableComponent(styled.View`
  background-color: #eb4444;
  height: 30;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  bottom: 60;
  border-radius: 5;
  margin: 20px;
`);

export const OfflineNoticeText = styled.Text`
  color: #fff;
  font-size: 16;
`;
