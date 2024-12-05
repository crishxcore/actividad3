import { View } from "react-native";
import { useRouter } from "expo-router";
import homeimage from "../../assets/home.png";
import {
  StyledContainer,
  StyledImage,
  StyledPressable,
  StyledPressableSecondary,
  StyledTextPressable,
  StyledTitle,
  StyledText,
  StyledPressableSecondarySmall,
  StyledPressableSmall,
  StyledTextButtonSmall,
} from "../../styles";

const Home = () => {
  const router = useRouter();

  return (
    <StyledContainer>
      <StyledTitle>Todoista</StyledTitle>
      <StyledText>¡Te ayuda a completar tus tareas!</StyledText>
      <StyledImage source={homeimage} />

      <StyledPressable onPress={() => router.push("/(tabs)/AddItem")}>
        <StyledTextPressable>Añadir tarea</StyledTextPressable>
      </StyledPressable>

      <StyledPressableSecondary onPress={() => router.push("/(tabs)/TaskList")}>
        <StyledTextPressable>Ver mis tareas</StyledTextPressable>
      </StyledPressableSecondary>

      {/* Contenedor para los botones de About y Help */}
      <View
        style={{
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          marginTop: 120,
          marginLeft: 200,
        }}
      >
        <StyledPressableSecondarySmall
          onPress={() => router.push("/(stack)/About")}
        >
          <StyledTextButtonSmall>About</StyledTextButtonSmall>
        </StyledPressableSecondarySmall>

        <StyledPressableSmall onPress={() => router.push("/(stack)/Help")}>
          <StyledTextButtonSmall>Help</StyledTextButtonSmall>
        </StyledPressableSmall>
      </View>
    </StyledContainer>
  );
};

export default Home;
