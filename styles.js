import { TextInput, Pressable, Text, FlatList, View } from 'react-native';
import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
  border: 4px solid #000;
  padding: 10px;
  margin: 10px;
  background-color: lightblue;
  border-radius: 10px;
  font-size: 40px;
  flex: 1;
  height: 80px;
`;

export const StyledPressable = styled.Pressable`
  background-color: black;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  color: white;
  text-align: center;
  font-size: 40px;
  height: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  padding: 10px;
  height: 120px;
`;

export const StyledFlatList = styled.FlatList`
  margin: 10px;
`;

export const Li = styled.Text`
  background-color: black;
  color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-size: 40px;
  flex: 1;
  align-items: stretch;
  justify-content: stretch;
`;