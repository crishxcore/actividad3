import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyledTextInput, StyledPressable, StyledText, Row } from '../../styles';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.linkContainer}>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Inicio</Text>
        </Link>
        <Link href="/AddItem" style={styles.link}>
          <Text style={styles.linkText}>Añadir tarea</Text>
        </Link>
        <Link href="/TaskList" style={styles.link}>
          <Text style={styles.linkText}>Mis tareas</Text>
        </Link>
      </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#dddddd",
    flex: 1,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    marginHorizontal: 10,
  },
  linkText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  successMessageContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#d4edda",
    borderRadius: 5,
  },
  successMessage: {
    color: "#155724",
    textAlign: "center",
    fontSize: 16,
  },
});

export default AddItem;