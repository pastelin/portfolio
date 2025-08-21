import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { v4 as uuidv4 } from 'uuid';
import { BtnAction } from '../components/projects/BtnAction';

export const FeaturedProjects = () => {
    console.log(projects);
    return (
        <section className="featured-projects">
            <h2 className="section-title">Proyectos Destacados</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-type">
                            <span>{project.type}</span>
                        </div>
                        <img src={project.img.src} alt={project.img.alt} />
                        <h4 className="project-title-sm">{project.title}</h4>
                        <p className="project-description">
                            {project.description}
                        </p>
                        <p className="project-tech-list">
                            {project.techs.slice(0,4).map((tech) => (
                                <span key={uuidv4()} className="project-tech">
                                    {tech.name}
                                </span>
                            ))}
                        </p>
                        <p className="project-actions">
                            {project.actions.map((action) => (
                                <BtnAction key={uuidv4()} action={action} />
                            ))}

                            <Link
                                className="project-action-link"
                                to={`/projects/${project.id}`}
                            >
                                Caso de Éxito
                            </Link>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
