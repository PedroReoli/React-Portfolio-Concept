import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { INavLink } from "@/types";
import { TopbarLinks } from "@/constants";
import { Button } from "@/components/ui/button";


const Topbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="topbar">
      <div className="topbar-menu flex gap-6">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/icons/logo-form.svg"
            alt="logo"
            width={250}
            height={36}
          />
        </Link>

        <ul className="topbar-menu flex gap-6">
          {TopbarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`topbar-menu-item group ${isActive && "bg-primary-500"}`}
              >
                <NavLink to={link.route}
                  className="flex gap-4 items-center p-4"
                  >
                  <img src={link.imgURL} alt={link.label} 
                 className={`group-hover:invert-white ${isActive && "invert-white"}`}
                 />
                  
                
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={() => navigate(`/profile`)}
      >
        <p className="small-medium lg:base-medium">Profile</p>
      </Button>
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