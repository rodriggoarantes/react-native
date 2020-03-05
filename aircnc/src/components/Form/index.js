import styled from 'styled-components/native';

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 0 10px;
  margin-top: 30px;
`;

export const Input = styled.TextInput`
  border: 1px solid #ddd;
  padding: 1px 20px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
