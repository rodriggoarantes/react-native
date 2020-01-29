import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Loading = styled.Text`
  flex: 1;
  align-self: center;
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
