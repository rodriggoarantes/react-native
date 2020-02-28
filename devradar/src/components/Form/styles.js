import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;
export const SearchInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  elevation: 4;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #8e4dff;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border-radius: 25px;
`;
