import { Platform } from 'react-native';
import styled from 'styled-components/native';

import logo from '~/assets/logo.png';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Safe = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? '24px' : '0px'};
`;

export const LogoFull = styled.Image.attrs({
  source: logo,
})``;

export const Logo = styled(LogoFull)`
  height: 32px;
  resize-mode: contain;
  align-self: center;
  margin-top: 10px;
`;
