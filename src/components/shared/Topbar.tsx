import { NavLink } from "react-router-dom";


const Topbar = () => {
  return (
    <nav className="topbar">
        <img src="/assets/icons/logo.svg" alt="" className="logo"/>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/SocialMedias">Social Medias</NavLink></li>
      </ul>
    </nav>
  );
};

export default Topbar;

// Comentários sobre o que o codigo faz
// Esse código cria uma barra de navegação superior (topbar) com links para diferentes seções do site. Os links são 
// dinâmicos e destacam-se visualmente quando a página correspondente está ativa. O destaque é feito adicionando uma 
// classe de fundo (bg-primary-500) aos links ativos. O código usa um loop (map) para gerar dinamicamente os itens da barra 
// com base nas configurações fornecidas na matriz TopbarLinks, onde cada item contém informações sobre a imagem, a rota e 
// o rótulo do link.

// Em breve terei Social Medias sobre Desenvolvimento 
// {/* <li><NavLink to="/socialmedia">Social Medias</NavLink></li> */}