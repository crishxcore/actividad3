import { useState } from "react";
import { Text } from "react-native";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyledTextInput,
  StyledPressable,
  StyledSubtitle,
  StyledText,
  StyledContainer,
  StyledImage,
  StyledTextPressable,
  StyledPressableSecondary,
  SuccessMessage,
} from "../../styles";
import additemimage from "../../assets/add.png";

const AddItem = () => {
  const [text, setText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const addTask = async () => {
    const storedTasks = await AsyncStorage.getItem("tasks");
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    const newTasks = [...tasks, text];
    await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
    console.log("Tasks after adding:", newTasks);
    setText("");
    setSuccessMessage("Tarea añadida con éxito");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <StyledContainer>
      <StyledSubtitle>Añade tus tareas</StyledSubtitle>
      <StyledTextInput
        value={text}
        onChangeText={(text) => setText(text)}
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
