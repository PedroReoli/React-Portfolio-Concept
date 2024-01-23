import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { INavLink } from "@/types";
import { TopbarLinks } from "@/constants";
import { Button } from "@/components/ui/button";


const Topbar = () => {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();

  return (
    <nav className="topbar">
        <img src="/assets/icons/logo.svg" alt="" className="logo"/>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experiences</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Social Medias</li>
        </ul>     

{/* gpt abaixo */}
        <div className="search-box">
          <input type="text" placeholder="Procurar por link"/>
          <img  src="/assets/icons/search.svg"  alt="" />
            {/* <Button
              variant="ghost"
              className="shad-button_ghost"
              onClick={() => navigate(`/profile`)}
            >
              <p className="small-medium lg:base-medium">Search</p>
            </Button> */}
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