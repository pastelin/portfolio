import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const BtnAction = ({ action }) => {
    return (
        <a
            key={uuidv4()}
            href={action.href}
            className={`project-action-link ${
                action.isPrincipal ? '--principal' : ''
            }`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {action.label}
        </a>
    );
};

BtnAction.propTypes = {
    action: PropTypes.shape({
        href: PropTypes.string.isRequired,
        isPrincipal: PropTypes.bool,
        label: PropTypes.string.isRequired,
    }).isRequired,
};
