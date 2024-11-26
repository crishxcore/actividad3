import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import {StyledPressable, StyledText} from '../../styles';

const Home = () => {
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
      <StyledPressable onPress={() => {}}>
        <Link href="/AddItem">
          <StyledText>Añadir tarea</StyledText>
        </Link>
      </StyledPressable>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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

export default Home;
