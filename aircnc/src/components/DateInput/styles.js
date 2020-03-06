import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 0;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 16px;
  height: 46px;
  background: rgba(100, 0, 0, 0.1);
  border-radius: 4px;
  margin: 8px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #333;
  margin-left: 15px;
`;

export const Picker = styled.View`
  ${Platform.select({
    ios: css`
      background: #fff;
      padding: 15px 30px;
      margin-top: 30px;
    `,
    android: css`
      margin-top: 0px;
    `,
  })};
`;
