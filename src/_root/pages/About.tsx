// About.tsx
import { useState } from 'react';

// Definindo os tipos para as seções válidas
type Section = 'Life' | 'Education' | 'Experience';
// Mapeamento entre seções e imagens
const sectionImages: Record<Section, string> = {
  Life: '/images/Perfil.jpg',
  Education: '/path/to/education-image.jpg',
  Experience: '/path/to/experience-image.jpg',
};

const About = () => {
  const [activeSection, setActiveSection] = useState<Section>('Life');

  // Aceita apenas valores válidos para section
  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="about-container">
      {/* Container da imagem */}
      <div className="image-container">
        <img src={sectionImages[activeSection]} alt={`Image for ${activeSection} section`} className="section-image" />
      </div>

      {/* Conteúdo de texto */}
      <div className="about-text-container">
        <div className='heading-about'>
        <h2 className="h3-a">A bit </h2>
        <h1 className="h1-a">About Me</h1>
        </div>
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
            <div>
              <h2 className='h-section'>Life Section</h2>
              <p className='section-text'>Sou um apaixonado por <b>conhecimento, música</b> e faz uns 3 anos que descobri a paixão pela <b>programação</b>.
              Minha jornada é única, trazendo uma perspectiva especial aos projetos. A <b>organização, o comprometimento e o hiperfoco</b> em aprendizado são meus diferenciais.</p>
            </div>
          )}
          {activeSection === 'Education' && (
            <div>
              <h2 className='h-section'>Education Section</h2>
              <p className='section-text'>Estou no 5º período do curso de Sistemas de Informação na UNIFOA.
                Minha busca por conhecimento e aprimoramento é constante, utilizando
                tecnologias como <b> C# ,HTML, CSS, JavaScript, TypeScript, Vite, React, React Native, SQL,
                Python e AppWrite.</b></p>
            </div>
          )}
          {activeSection === 'Experience' && (
            <div>
              <h2 className='h-section'>Experience Section</h2>
              <p className='section-text'>Fui Coordenador Estudantil na <b>Sala+Verde da UNIFOA</b>, desenvolvendo sites responsivos. Na <b>Game Jam UNIFOA</b>, 
              liderei palestras e orientei no desenvolvimento de jogos. Atualmente, estou em um projeto social para qualificar e dar mentoria a mães negras solteiras.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

