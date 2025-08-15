import { Link } from 'react-router-dom';

export const FeaturedProjects = () => {
    return (
        <section className="featured-projects">
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <img src="/projects/project.png" alt="Portfolio" />
                    <h4 className="project-title-sm">Gif Expert App</h4>
                    <p className="project-description">
                        Una aplicación web interactiva para buscar GIFs,
                        desarrollada en React. El reto fue tomar la lógica de un
                        proyecto académico y reconstruir completamente la
                        interfaz para crear una experiencia de usuario (UX)
                        moderna, atractiva y 100% responsiva.
                    </p>
                    <p className="project-tech-list">
                        <span className="project-tech">React</span>
                        <span className="project-tech">JavaScript (ES6+)</span>
                        <span className="project-tech">CSS Moderno</span>
                        <span className="project-tech">Giphy API</span>
                    </p>
                    <p className="project-actions">
                        <Link to={`/projects/1`}>
                            <button className="project-action-link --principal">
                                Caso de Éxito
                            </button>
                        </Link>

                        <a
                            href="https://github.com/pastelin/gif-expert-app.git"
                            className="project-action-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Código Fuente (Github)
                        </a>
                    </p>
                </div>

                <div className="project-card">
                    <img src="/projects/project.png" alt="Portfolio" />
                    <h4 className="project-title">Portfolio</h4>
                    <p className="project-description">
                        Descripción del proyecto Portfolio.
                    </p>
                    <p className="project-tech-list">
                        <span className="project-tech">React</span>
                        <span className="project-tech">JavaScript</span>
                        <span className="project-tech">CSS</span>
                    </p>
                    <p className="project-actions">
                        <a
                            href="https://example.com/demo"
                            className="project-action-link --principal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Caso de Éxito
                        </a>
                        <a
                            href="https://github.com/example/repo"
                            className="project-action-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Código Fuente (Github)
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};
