import { useState, useEffect } from "react";
import { View, Text,  SafeAreaView } from "react-native";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyledTextInput, StyledPressable, StyledText, Row, StyledContainer, StyledLinkContainer, StyledLink, StyledTitle} from '../../styles';

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
      <StyledLinkContainer>
        <Link href="/">
          <StyledLink>Inicio</StyledLink>
        </Link>
        <Link href="/AddItem">
          <StyledLink>Añadir tarea</StyledLink>
        </Link>
        <Link href="/TaskList">
          <StyledLink>Mis tareas</StyledLink>
        </Link>
      </StyledLinkContainer>
      <StyledTitle>Añade tu tarea</StyledTitle>
      <StyledText>¡Te ayuda a completar tus tareas!</StyledText>
      <Row>
        <StyledTextInput 
          value={text}
          onChangeText={text => setText(text)} 
        />
        <StyledPressable onPress={addTask}>
          <StyledText>+</StyledText>
        </StyledPressable>
      </Row>
      {successMessage ? (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessage}>{successMessage}</Text>
        </View>
      ) : null}
      <StyledPressable onPress={() => {}}>
        <Link href="/TaskList">
          <StyledText>Ver mis tareas</StyledText>
        </Link>
      </StyledPressable>
    </StyledContainer>
  );
};

export default AddItem;