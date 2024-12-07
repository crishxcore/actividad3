import { useState, useRef } from "react";
import { Link } from "expo-router";
import { useTaskContext } from '../../providers/TaskProvider';

import {
  StyledTextInput,
  StyledPressable,
  StyledSubtitle,
  StyledText,
  StyledContainer,
  StyledImage,
  StyledTextPressable,
  StyledPressableSecondary,
} from "../../styles";
import additemimage from "../../assets/add.png";

const AddItem = () => {
  const [taskText, setTaskText] = useState("");
  const {tasks, setTasks} = useTaskContext();
  const inputRef = useRef(null);

  const saveTask = () => {
    setTasks([...tasks, taskText]);
    setTaskText("");
    inputRef.current.blur();
    alert("Task saved!");
  };

  return (
    <StyledContainer>
      <StyledSubtitle>Añade tus tareas</StyledSubtitle>
      <StyledTextInput
        placeholder="Escribe tu tarea aquí"
        value={taskText}
        onChangeText={setTaskText}
        ref={inputRef}
      />
      <StyledPressable onPress={saveTask}>
        <StyledText>Añadir tarea</StyledText>
      </StyledPressable>
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
