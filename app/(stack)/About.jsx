import aboutImage from "../../assets/gaviota.png"; // Agrega una imagen adecuada para la página "About"
import {
  StyledContainer,
  StyledImage,
  StyledSubtitle,
  StyledText,
  StyledView,
} from "../../styles";

const About = () => {
  return (
    <StyledContainer>
      <StyledImage
        source={aboutImage}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
      <StyledSubtitle style={{ textAlign: "center" }}>
        Acerca de Todoista
      </StyledSubtitle>
      <StyledText style={{ maxWidth: 500, textAlign: "center", marginTop: 20 }}>
        Todoista es una aplicación diseñada para ayudarte a organizar tus tareas
        de manera eficiente. Nuestra misión es simplificar tu vida y mantenerte
        al día con tus responsabilidades. ¡Gracias por confiar en nosotros!
      </StyledText>
    </StyledContainer>
  );
};

export default About;
