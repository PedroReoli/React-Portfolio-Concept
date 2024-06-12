// SocialMedias.tsx

import { FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SocialMedias = () => {
  return (
    <div className="contact-container">
      <h2 className="h2-c">Contato</h2>
      <p className='p-contact'>
       Este portfolio reflete o desenvolvimento das minhas habilidades e uma breve apresentação sobre mim.
       Caso tenha interesse, minhas redes sociais estão em disposição para compartilhar projetos e exploram minha jornada como influenciador na programação.
       É uma maneira de divulgar meu trabalho, aprender com a comunidade de desenvolvedores e ficar em contato.
      </p>
      
      {/* Redes Sociais */}
      <div className="social-circle-container">
        <div className="social-circle">
          <img src="" alt="" />
          </div>
        <div className="social-icons">
          <NavLink to="https://www.instagram.com/01_dev_em_desenvolvimento/" className="social-icon" target="_blank">
            <FaInstagram />
          </NavLink>
          <NavLink to="https://github.com/PedroReoli" className="social-icon" target="_blank">
            <FaGithub />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/pedro-lucas-reis-de-oliveira-sousa-a93945171/" className="social-icon" target="_blank">
            <FaLinkedin />
          </NavLink>
          <NavLink to="https://www.youtube.com/@DevDesenvolvimento" className="social-icon" target="_blank" >
            <FaYoutube />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SocialMedias;
