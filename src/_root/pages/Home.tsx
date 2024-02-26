// Home.tsx

const Home = () => {
  const handleDownloadCV = () => {
    // Substitua 'caminho/do/seu/curriculo.pdf' pelo caminho real do seu currículo
    const curriculumPath = '/pdf/Curriculo.pdf';

    // Abre o currículo em uma nova janela, fazendo o navegador iniciar o download
    window.open(curriculumPath, '_blank');
  };
  return (
    <div className="home ">
      <div className="home-text-container w-90 md:w-45">
        <div>
          <h2 className="h3-h">Hello </h2>
          <h1 className="h1-h">I'm Pedro Reis</h1>
          <h2 className="h2-h">Web Dev</h2>
        </div>
        <div className="container-button">
            <button className="h-button" onClick={handleDownloadCV}>
             Download CV
            </button>
        </div>
      </div>
      <div className="home-circle-container">
        <div className="home-circle">
          <img src="/images/Perfil.jpg" alt="Profile"/>
        </div>
        <div className="tech-icons">
          <img src="/assets/icons/react.svg" alt="React" />
          <img src="/assets/icons/ts.svg" alt="Typescript" />
          <img src="/assets/icons/js.svg" alt="JavaScript" />
          <img src="/assets/icons/html5.svg" alt="HTML" />
          <img src="/assets/icons/css.svg" alt="CSS" />
          <img src="/assets/icons/sql.svg" alt="SQL" />
          {/* Atualmente estou estudando as linguagens abaixo,quando eu estiver num nivel mais elevado...estarao no Oficial */}
          {/* <img src="/assets/icons/python.svg" alt="Python" /> */}
          {/* <img src="/assets/icons/c-sharp.svg" alt="C#" /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;