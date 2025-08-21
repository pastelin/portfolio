import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    // NUEVO: Creamos un estado para saber si el menú está abierto o cerrado.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // NUEVO: Esta función cambia el estado para abrir/cerrar el menú.
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // NUEVO: Esta función cierra el menú (útil al hacer clic en un enlace).
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'nav-link active nav-logo'
                            : 'nav-link nav-logo'
                    }
                    onClick={closeMenu}
                >
                    Juan Pastelin
                </NavLink>

                {/* 1. Menú de Navegación para Escritorio */}
                <div className="nav-menu-desktop">
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

                {/* 2. El Menú Desplegable para Móvil (inicialmente oculto) */}
                <div className={`nav-menu-mobile ${isMenuOpen ? 'is-active' : ''}`}>
                    <NavLink
                        to="proyectos"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link-mobile active'
                                : 'nav-link-mobile'
                        }
                    >
                        Proyectos
                    </NavLink>
                    <NavLink
                        to="sobre-mi"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link-mobile active'
                                : 'nav-link-mobile'
                        }
                    >
                        Sobre mí
                    </NavLink>
                    <NavLink
                        to="contacto"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link-mobile active'
                                : 'nav-link-mobile'
                        }
                    >
                        Contacto
                    </NavLink>
                </div>

                {/* 3. El Botón de Hamburguesa (solo visible en móvil) */}
                <button
                    className={`nav-toggle ${isMenuOpen ? 'is-active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {/* Usamos 3 divs para crear las líneas de la hamburguesa con CSS */}
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </button>
            </nav>
        </header>
    );
};
