import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active logo' : 'nav-link logo'
                    }
                >
                    Juan Pastelin
                </NavLink>
                <div className="nav-links">
                    <NavLink
                        to="proyectos"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Proyectos
                    </NavLink>
                    <NavLink
                        to="sobre-mi"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Sobre mí
                    </NavLink>
                    <NavLink
                        to="contacto"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Contacto
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};
