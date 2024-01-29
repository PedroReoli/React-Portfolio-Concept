// Portfolio.tsx
const Portfolio = () => {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1...',
      technologies: ['React', 'Node.js'],
      image: '/images/project1.jpg',
      link: 'https://example.com/project1',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2...',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/images/project2.jpg',
      link: 'https://example.com/project2',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="portfolio-container">
      <h2 className="h2-h">Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Tecnologias: {project.technologies.join(', ')}</p>
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