import { NavLink } from "react-router-dom";


const Topbar = () => {
 

    // Search Bar 
      

  return (
    <nav className="topbar">
        <img src="/assets/icons/logo.svg" alt="" className="logo"/>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/experiences">Experiences</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/social-media">Social Medias</NavLink></li>
      </ul>
{/* gpt abaixo */}
        <div className="search-box">
          <input type="text" placeholder="Procurar por link"/>
          <img  src="/assets/icons/search.svg"  alt="" />
        </div>

        
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