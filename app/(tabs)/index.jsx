import { Text } from "react-native";
import { Link } from "expo-router";
import {StyledContainer, StyledImage, StyledLink, StyledLinkContainer, StyledPressable, StyledText, StyledTextPressable, StyledTitle, StyledPressableSecondary, StyledTextPressableSecondary} from '../../styles';
import homeimage from '../../assets/chill-time.png';

const Home = () => {
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
        <StyledTitle>Todoista</StyledTitle>
        <StyledText>¡Te ayuda a completar tus tareas!</StyledText>
        <StyledImage source={homeimage} />
        <StyledPressable onPress={() => {}}>
          <Link href="/AddItem">
            <StyledTextPressable>Añadir tarea</StyledTextPressable>
          </Link>
        </StyledPressable>
        <StyledPressableSecondary onPress={() => {}}>
          <Link href="/TaskList">
            <StyledTextPressable>Ver mis tareas</StyledTextPressable>
          </Link>
        </StyledPressableSecondary>
      </StyledContainer>
  );
};

export default Home;
