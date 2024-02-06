// Portfolio.tsx
const Portfolio = () => {
  const projects = [
    {
      title: 'Peoplelly',
      description: ` ''Peoplelly'' é um aplicativo que conecta pessoas por meio de eventos, incentivando interações sociais e diversão.`,
      technologies: ['React', 'Tailwind.CSS','SQL','AppWrite'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project1',
    },
    {
      title: 'Musicianist',
      description: ` ''Musicianist'' é o lugar perfeito para amantes da música elevarem suas habilidades musicais através de minigames.`,
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'SQL'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Only CSS Games',
      description: `Explore a magia dos jogos com animações CSS!Você pode desfrutar de jogos envolventes criados com CSS Animations.`,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'News In Your Hands',
      description: `Tenha as notícias na palma da sua mão! As novidades de cada grande jornal em um único espaço organizadas em um só lugar.`,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'To-Do Today',
      description: ` ''To-Do Today'' é um aplicativo simples que permite aos usuários planejar e organizar suas tarefas diárias`,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
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
            <div className="project-details">
              <h3>{project.title}</h3>
              <p className="p-1">Tecnologias: {project.technologies.join(', ')}</p>
              <p className="p-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
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