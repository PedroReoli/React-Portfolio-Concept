// Portfolio.tsx
const Portfolio = () => {
  const projects = [
    {
      title: 'Peoplelly',
      description: ` ''Peoplelly'' é um aplicativo que conecta pessoas por meio de eventos, incentivando interações sociais e diversão.`,
      technologies: ['React', 'Tailwind.CSS','SQL','AppWrite'],
      image: '/images/projeto-peoplelly.svg',
      link: 'https://peoplelly.netlify.app',
    },
    {
      title: 'Calculadora',
      description: `Uma aplicação desktop que realiza operações básicas de cálculo (adição, subtração, multiplicação e divisão).`,
      technologies: ['C#', 'Windows Forms'],
      image: '/images/calculadora.jpg',
      link: 'https://github.com/seu-usuario/calculadora-simples',
    },
    {
      title: 'Aplicativo de To-Do',
      description: `Um aplicativo que permite aos usuários adicionar, editar, excluir e marcar tarefas como concluídas.`,
      technologies: ['C#', 'Windows Forms', 'SQLite'],
      image: '/images/todolist.jpg',
      link: 'https://github.com/seu-usuario/todo-list',
    },
    {
      title: 'Aplicativo de Clima',
      description: `Um aplicativo que exibe informações meteorológicas em tempo real utilizando uma API de clima.`,
      technologies: ['C#', 'WPF', 'OpenWeatherMap API'],
      image: '/images/weatherapp.jpg',
      link: 'https://github.com/seu-usuario/aplicativo-clima',
    },
    {
      title: 'Biblioteca Digital',
      description: `Um sistema de gerenciamento de biblioteca que permite a catalogação e empréstimo de livros.`,
      technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server'],
      image: '/images/library.jpg',
      link: 'https://github.com/seu-usuario/biblioteca-digital',
    },
    // {
    //   title: 'Projeto 2',
    //   description: 'Descrição do Projeto 2...',
    //   technologies: ['HTML', 'CSS', 'JavaScript'],
    //   image: '/images/project2.jpg',
    //   link: 'https://example.com/project2',
    // },
    // {
    //   title: 'Projeto 2',
    //   description: 'Descrição do Projeto 2...',
    //   technologies: ['HTML', 'CSS', 'JavaScript'],
    //   image: '/images/project2.jpg',
    //   link: 'https://example.com/project2',
    // },
    // {
    //   title: 'Projeto 2',
    //   description: 'Descrição do Projeto 2...',
    //   technologies: ['HTML', 'CSS', 'JavaScript'],
    //   image: '/images/project2.jpg',
    //   link: 'https://example.com/project2',
    // },
    // {
    //   title: 'Projeto 2',
    //   description: 'Descrição do Projeto 2...',
    //   technologies: ['HTML', 'CSS', 'JavaScript'],
    //   image: '/images/project2.jpg',
    //   link: 'https://example.com/project2',
    // },
    // {
    //   title: 'Projeto 2',
    //   description: 'Descrição do Projeto 2...',
    //   technologies: ['HTML', 'CSS', 'JavaScript'],
    //   image: '/images/project2.jpg',
    //   link: 'https://example.com/project2',
    // },

  ];

  return (
    <div className="portfolio-container">
      <h2 className="h2-portfolio">Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div  className="project-details">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <h3 >{project.title}</h3>
              </a>
              <p className="p-1">Tecnologias: {project.technologies.join(', ')}</p>
              <p className="p-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="a-portfolio">
                Ver Projeto
              </a>
            </div>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;