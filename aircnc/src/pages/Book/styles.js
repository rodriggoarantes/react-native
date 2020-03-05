import styled from 'styled-components/native';
import { Button } from '~/components/Form';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Hello = styled.Text`
  display: flex;
  align-items: center;
  color: #005662;
  font-size: 24px;
`;

export const CancelButton = styled(Button)`
  background-color: #cecece;
  margin-top: 10px;
`;
