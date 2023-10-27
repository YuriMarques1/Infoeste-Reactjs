import { CorpoDocente } from "@/entities/corpo-docente";
import { Email, EmailWrapper, Formation, FormationWrapper, ImageWrapper, MainWrapper, Name, NameWrapper, ProfessorImage, Title, TitleWrapper } from "./card-item.styles";


type Props = {
  professor: CorpoDocente;
};

export const CardItem = ({professor}: Props) => {

  return (
    <MainWrapper>
      <NameWrapper>
          <Name>Professor.nome</Name>
      </NameWrapper>
      <TitleWrapper>
          <Title>{professor.titulacao}</Title>
      </TitleWrapper>
      <ImageWrapper>
        <ProfessorImage src={professor.foto} />
      </ImageWrapper>
      <FormationWrapper>
        <Formation>
          <Formation>{professor.email}</Formation> 
        </Formation>
      </FormationWrapper>
      <EmailWrapper>
        <Email>{professor.email}</Email>
      </EmailWrapper>
    </MainWrapper>


  );
};
