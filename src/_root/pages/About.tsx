// About.tsx
import { useState } from 'react';

// Definindo os tipos para as seções válidas
type Section = 'Life' | 'Education' | 'Experience';

const About = () => {
  const [activeSection, setActiveSection] = useState<Section>('Life');

  // Aceita apenas valores válidos para section
  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="about-text-container">
      <h2 className="h3-h">A bit </h2>
      <h1 className="h1-h">About Me</h1>
            {/* Seções */}
      <div className="section-buttons">
        <button className={`section-button ${activeSection === 'Life' ? 'active' : ''}`} onClick={() => handleSectionClick('Life')}>
          Life
        </button>
        <button className={`section-button ${activeSection === 'Education' ? 'active' : ''}`} onClick={() => handleSectionClick('Education')}>
          Education
        </button>
        <button className={`section-button ${activeSection === 'Experience' ? 'active' : ''}`} onClick={() => handleSectionClick('Experience')}>
          Experience
        </button>
      </div>

    {/* Conteúdo dinâmico com base na seção ativa */}
    <div className="section-content">
        {activeSection === 'Life' && (
          <div >
            <h2 className='h-section'>Life Section</h2>
            <p className='section-text'>Sou um apaixonado por conhecimento, música e faz uns 3 anos que  descobri a paixão pela programação.
               Autista, minha jornada é única, trazendo uma perspectiva especial aos projetos. A organização,
                o comprometimento e o hiperfoco em aprendizado são meus diferenciais.</p>
          </div>
        )}
        {activeSection === 'Education' && (
          <div >
            <h2 className='h-section'>Education Section</h2>
            <p className='section-text'>Estou no 5º período do curso de Sistemas de Informação na UNIFOA. 
              Minha busca por conhecimento e aprimoramento é constante, utilizando 
              tecnologias como HTML, CSS, JavaScript, TypeScript, Vite, React, SQL, 
              Python e AppWrite.</p>
          </div>
        )}
        {activeSection === 'Experience' && (
          <div >
            <h2 className='h-section'>Experience Section</h2>
            <p className='section-text'>Participei de projetos significativos, 
            como Coordenador na Sala+Verde da UNIFOA, desenvolvendo sites responsivos.
             Na "Game Jam UNIFOA", atuei como Líder Estudantil, ministrando palestras 
             e orientando em desenvolvimento de jogos e modelos de personagens.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

