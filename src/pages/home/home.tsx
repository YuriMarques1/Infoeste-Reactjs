import { Cursos } from "./components/cursos/cursos";
import { Intro } from "./components/intro/intro";
import { Mapa } from "./components/mapa/mapa";
import { SobreNos } from "./components/sobre-nos/sobre-nos";
import { Duvidas } from "./components/duvidas/duvidas"



export const Home = () => {
  return (
    <>
      <Intro />
      <SobreNos isAbsolute={false} />
      <Cursos />
      <Mapa />
      <Duvidas />
    </>
  );
};
