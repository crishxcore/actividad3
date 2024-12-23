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
  margin: 10px;
`;

export const StyledText = styled.Text`
  text-align: center;
  font-size: 20px;
`;

export const StyledTextInput = styled.TextInput`
  border: 2px solid #9BA1A6;
  padding: 10px;
  margin: 10px;
  background-color: white;
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

export const Row = styled.View`
  flex-direction: row;
  padding: 10px;
  height: 120px;
`;

export const StyledFlatList = styled.FlatList`
  width: 100%;
  padding: 20px;
`;

export const Li = styled.Text`
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  font-size: 20px;
  align-self: center;
  min-width: 320px;
  box-shadow: rgba(150, 160, 165, 0.8) 0px 10px 20px;
  flex: 1;
`;

export const StyledPressableSmall = styled.Pressable`
  background-color: #f95959;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  min-width: 150px; 
  position: absolute;
  bottom: 60px;
  right: 20px;
`;

export const StyledPressableSecondarySmall = styled(StyledPressableSmall)`
  background-color: #9BA1A6;
  bottom: 20px;
`;

export const StyledTextButtonSmall = styled.Text`
  color: white; 
  font-size: 16px; 
  font-weight: bold; 
  text-align: center; 
`;
