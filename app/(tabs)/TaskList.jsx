import { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { StyledFlatList, Li } from '../../styles';

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
      <StyledFlatList
        data={tasks}
        renderItem={({ item }) => <Li><Text>{item}</Text></Li>}
        keyExtractor={(item, index) => index.toString()}
      />
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
});

export default TaskList;