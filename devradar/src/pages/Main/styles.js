import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7159c1',
  size: 50,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const Map = styled(MapView)`
  flex: 1;
`;
export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;
export const Ballon = styled.View`
  width: 264px;
  padding: 4px;
`;
export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const DevBio = styled.Text`
  color: #666;
  margin-top: 4px;
`;
export const DevTechs = styled.Text`
  font-weight: bold;
  margin-top: 4px;
  font-size: 12px;
  padding: 2px;
`;
export const DevGithub = styled.Text``;
