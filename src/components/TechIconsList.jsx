import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const TechIconsList = ({ techs, title }) => {
    return (
        <article>
            <h2 className="project-section-title">{title}</h2>
            <ul className="tools-list">
                {techs.map((tech) => (
                    <li key={uuidv4()} className="tools-item">
                        <a
                            href={tech.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                title={tech.title}
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </article>
    );
};

TechIconsList.propTypes = {
    techs: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};
