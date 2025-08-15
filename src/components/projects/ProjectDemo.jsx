import PropTypes from 'prop-types';
import { memo } from 'react';

const ProjectDemoComponent = memo(({ demo }) => {
    const { title, image, alt } = demo;
    return (
        <article>
            <h2 className="project-section-title">{title}</h2>
            <img src={image} alt={alt} loading="lazy" />
        </article>
    );
});

ProjectDemoComponent.displayName = 'ProjectDemo';

ProjectDemoComponent.propTypes = {
    demo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
};

export const ProjectDemo = ProjectDemoComponent;
