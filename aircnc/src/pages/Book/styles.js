import styled from 'styled-components/native';
import { Button } from '~/components/Form';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const CancelButton = styled(Button)`
  background-color: #cecece;
  margin-top: 10px;
`;

export const Info = styled.Text`
  color: #ccc;
  font-size: 20px;
`;
