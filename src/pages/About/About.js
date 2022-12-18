import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        <strong>TERRA</strong> <span>em Trânsito</span>
      </h2>
      <p>
      O grupo tem por objetivo o desenvolvimento de pesquisas de caráter teórico e/ou crítico sobre expressões da diversidade no âmbito da representação literária. 
      Acolhe, portanto, investigações que propiciam um olhar multi e interdisciplinar sobre a constituição e representação das identidades, com foco especial nos grupos sociais que sofrem algum tipo de exclusão em função da diversidade étnica, sexual e cultural, bem como nos sujeitos migrantes e diaspóricos e suas formas de apropriação do passado e do espaço.
      </p><br/>
      <p className={styles.subtitle}>1.Representações e autorrepresentações identitárias na literatura: </p>
      <p>
      Estudo das representações de grupos sociais, em particular os marginalizados, seja por gênero, etnia, classe ou orientação sexual, nas diversas formas de expressão literária.  A linha privilegiará o enfoque no lugar de fala e nas especificidades dos discursos.
      </p>
      <p className={styles.subtitle}>2. Estética literária e tendências críticas: </p>
      <p>
      A linha abriga estudos relacionados à estética literária e às tendências críticas contemporâneas, privilegiando a contaminação de gêneros, a permeação de técnicas e recursos literários, os procedimentos paródicos e combinatórios e o dialogismo intertextual. Análise e interpretação de textos de e sobre literatura.
      </p>
      <p className={styles.subtitle}>3. Memória, identidade e deslocamento: </p>
      <p>
      A linha abriga estudos sobre a representação das relações entre a diversidade étnica, a mobilidade cultural e territorial e a memória como forma de apropriação do passado e de diálogo com a tradição.
      </p>
    </div>
  );
};

export default About;
