import { useState, useCallback } from "react";
import { Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {StyledFlatList, Li, StyledSubtitle, StyledContainer, StyledImage} from '../../styles';
import taskimage from '../../assets/tasks.png';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      console.log('Tasks loaded:', parsedTasks); // Log para depuración
      setTasks(parsedTasks);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  return (
    <StyledContainer>
      {/* <View style={styles.linkContainer}>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Inicio</Text>
        </Link>
        <Link href="/AddItem" style={styles.link}>
          <Text style={styles.linkText}>Añadir tarea</Text>
        </Link>
        <Link href="/TaskList" style={styles.link}>
          <Text style={styles.linkText}>Mis tareas</Text>
        </Link>
      </View> */}
      <StyledImage source={taskimage} />
      <StyledSubtitle>Mis tareas</StyledSubtitle>
      <StyledFlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <Li>
            <Text>{index + 1}. {item}</Text>
          </Li>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </StyledContainer>
  );
};

export default TaskList;