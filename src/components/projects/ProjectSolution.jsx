import { solutions } from '../../data/solutions';
import PropTypes from 'prop-types';

export const ProjectSolution = ({ projectId }) => {
    const solution = solutions().find((sol) => sol.id === projectId);

    return (
        <article>
            <div className="project-section-with-image">
                <h2 className="project-section-title project--relevant">
                    Mi Solución
                </h2>
                <img src="/others/idea.svg" alt="Solution" />
            </div>

            {solution.solutionDetails}
        </article>
    );
};

ProjectSolution.propTypes = {
    projectId: PropTypes.string.isRequired,
};
