import { NavLink } from 'react-router-dom';

export const Hero = () => {
    const today = new Date();

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hola, soy{' '}
                        <span className="hero-name">Juan Pastelin</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        <span className="typing-animation">
                            DESARROLLADOR FULL STACK JAVA | INGENIERO DE
                            SOFTWARE BACKEND
                        </span>
                    </h2>
                    <p className="hero-description">
                        Ingeniero de software con experiencia en banca,
                        especializado en Java y Spring Boot. Experto en
                        modernización de sistemas críticos, migraciones exitosas
                        y desarrollo de APIs RESTful. Apasionado por el
                        aprendizaje continuo y las metodologías ágiles.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">
                                {today.getFullYear() - 2020}
                            </span>
                            <span className="stat-label">
                                Años de experiencia
                            </span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">1+</span>
                            <span className="stat-label">
                                Proyectos completados
                            </span>
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <NavLink to="/proyectos" className="btn btn-primary">
                            Ver mi trabajo
                        </NavLink>
                        <NavLink to="/contacto" className="btn btn-secondary">
                            Contactarme
                        </NavLink>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src="/profile.jpg"
                        alt="Juan Pastelin - Desarrollador Full Stack"
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
};
