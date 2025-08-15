import { Link, useParams } from 'react-router-dom';
import { BtnAction } from '../components/projects/BtnAction';
import { TechIconsList } from '../components/TechIconsList';
import { ProjectSolution } from '../components/projects/ProjectSolution';
import { projects } from '../data/projects';
import { ProjectDemo } from '../components/projects/ProjectDemo';

export const ProjectDetailPage = () => {
    const { projectId } = useParams(); // Obtiene el ID del proyecto desde la URL
    const project = projects.find((p) => p.id == projectId);

    if (!project) {
        return <h2>Proyecto no encontrado</h2>;
    }

    const { details } = project;

    return (
        <main className="project-detail">
            <article>
                <h1 className="project-title-xl">{details.title}</h1>
                <p className="project-description">{details.description}</p>
            </article>

            <article>
                <p className="project-actions">
                    {project.actions.map((action) => (
                        <BtnAction key={action.id} action={action} />
                    ))}
                </p>
            </article>

            <article>
                <div className="project-section-with-image">
                    <h2 className="project-section-title project--relevant">
                        El Reto
                    </h2>
                    <img src="/others/goal.svg" alt="Goal" />
                </div>
                <p className="project-section-description">
                    {details.goalDescription}
                </p>
            </article>

            <ProjectSolution projectId={projectId} />

            <ProjectDemo demo={project.demo} />

            <TechIconsList
                techs={project.techs}
                title="Tecnologías Utilizadas"
            />

            <article>
                <h2 className="project-section-title">
                    Resultados y Aprendizajes
                </h2>
                <p className="project-section-description">
                    {details.resultsDescription}
                </p>
            </article>

            <Link to="/" className="back-link">
                ← Volver al inicio
            </Link>
        </main>
    );
};
