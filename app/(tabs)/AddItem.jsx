import { useState, useEffect } from "react";
import { View, Text,  SafeAreaView } from "react-native";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyledTextInput, StyledPressable, StyledSubtitle, StyledText, Row, StyledContainer, StyledLinkContainer, StyledLink, StyledTitle, StyledImage, StyledTextPressable, StyledPressableSecondary, SuccessMessage} from '../../styles';
import additemimage from '../../assets/painting.png';

const AddItem = () => {
  const [text, setText] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const addTask = async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    const newTasks = [...tasks, text];
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    console.log('Tasks after adding:', newTasks); // Log para depuración
    setText('');
    setSuccessMessage('Tarea añadida con éxito');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Ocultar el mensaje después de 3 segundos
  };

  return (
    <StyledContainer>
      {/* <StyledLinkContainer>
        <Link href="/">
          <StyledLink>Inicio</StyledLink>
        </Link>
        <Link href="/AddItem">
          <StyledLink>Añadir tarea</StyledLink>
        </Link>
        <Link href="/TaskList">
          <StyledLink>Mis tareas</StyledLink>
        </Link>
      </StyledLinkContainer> */}
      <StyledSubtitle>Añade tus tareas</StyledSubtitle>
        <StyledTextInput 
          value={text}
          onChangeText={text => setText(text)}
          placeholder="Escribe tu tarea aquí" 
        />
        <StyledPressable onPress={addTask}>
          <StyledText>Añadir tarea</StyledText>
        </StyledPressable>
      {successMessage ? (
        <SuccessMessage>
          <Text>{successMessage}</Text>
        </SuccessMessage>
      ) : null}
      <StyledPressableSecondary onPress={() => {}}>
        <Link href="/TaskList">
          <StyledTextPressable>Ir a mis tareas</StyledTextPressable>
        </Link>
      </StyledPressableSecondary>
      <StyledImage source={additemimage} />
    </StyledContainer>
  );
};

export default AddItem;