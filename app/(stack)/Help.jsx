import helpImage from "../../assets/ok.png";
import {
  StyledContainer,
  StyledImage,
  StyledSubtitle,
  StyledText,
} from "../../styles";

const Help = () => {
  return (
    <StyledContainer>
      <StyledImage source={helpImage} />
      <StyledSubtitle>Ayuda y Soporte</StyledSubtitle>
      <StyledText style={{ maxWidth: 500, textAlign: "center", marginTop: 20 }}>
        Si necesitas ayuda con la aplicación, puedes contactarnos a través de
        nuestro correo de soporte: soporte@todoista.com. También puedes visitar
        nuestra sección de preguntas frecuentes en el sitio web para obtener más
        información.
      </StyledText>
    </StyledContainer>
  );
};

export default Help;
