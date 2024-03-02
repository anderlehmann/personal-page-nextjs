import "./conhecimentos.css"

import IconsTechs from "@/components/IconsTechs";
import Header from "@/components/Header";

export default function Conhecimentos() {
  return (
    <main className="App">
      <Header />
      <div className="body-page body-conhecimentos">
        <p id="p-techs">Estas são as tecnologias que utilizo e já utilizei em alguns projetos!</p>
        <div id="wrapper-techs">
          <IconsTechs techName="API Rest" caminho="/images/api.png" site="https://www.w3schools.com/js/js_api_intro.asp" />
          <IconsTechs techName="Arquitetura de Camadas" caminho="/images/camadas.png" site="https://www.ibm.com/br-pt/topics/three-tier-architecture" />
          <IconsTechs techName="CSS" caminho="/images/css-3.png" site="https://www.w3schools.com/css" />
          <IconsTechs techName="Docker" caminho="/images/docker.png" site="https://www.docker.com" />
          <IconsTechs techName="Express JS" caminho="/images/expressjs.png" site="https://expressjs.com/" />
          <IconsTechs techName="HTML" caminho="/images/html-5.png" site="https://www.w3schools.com/html" />
          <IconsTechs techName="Javascript" caminho="/images/javascript.png" site="https://www.javascript.com/" />
          <IconsTechs techName="MySQL" caminho="/images/mysql.png" site="https://www.mysql.com/" />
          <IconsTechs techName="Next JS" caminho="/images/nextjs.png" site="https://nextjs.org/" />
          <IconsTechs techName="Node JS" caminho="/images/node.png" site="https://nodejs.org/en" />
          <IconsTechs techName="Orientação a Objetos" caminho="/images/oop.png" site="https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos" />
          <IconsTechs techName="React" caminho="/images/react.svg" site="https://react.dev/" />
          <IconsTechs techName="Redux" caminho="/images/redux.png" site="https://redux.js.org/" />
          <IconsTechs techName="Sequelize ORM" caminho="/images/sequelize.svg" site="https://sequelize.org/" />
        </div>
      </div>
    </main>
  )
};
