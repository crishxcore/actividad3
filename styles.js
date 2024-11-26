import { TextInput, Pressable, Text, FlatList, View, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const StyledContainer = styled(SafeAreaView)`
  padding: 10px;
  background-color: #e3e3e3;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const StyledLinkContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 100%;
  max-height: 350px;
  resizeMode: contain;
`;

export const StyledTitle = styled.Text`
  font-size: 50px;
  font-weight: bold;
`;

export const StyledSubtitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const StyledText = styled.Text`
  text-align: center;
  font-size: 20px;
`;

export const StyledTextInput = styled.TextInput`
  border: 2px solid #9BA1A6;
  padding: 10px;
  margin: 10px;
  background-color: #e3e3e3;
  border-radius: 10px;
  font-size: 20px;
  width: 320px;
`;

export const StyledPressable = styled.Pressable`
  background-color: #f95959;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  min-width: 320px;
`;

export const StyledPressableSecondary = styled(StyledPressable)`
  background-color: #9BA1A6;
`;

export const StyledTextPressable = styled.Text`
  text-align: center;
  font-size: 20px;
`;

export const SuccessMessage = styled.View`
  background-color: lightgreen;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 40px;
  border: 2px solid green;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  position: absolute;
  top: 10px;
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