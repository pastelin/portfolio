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
                            Soluciones Robustas en Java | De la API al Frontend
                        </span>
                    </h2>
                    <p className="hero-description">
                        Ingeniero de software con experiencia en banca,
                        especializado en Java y Spring Boot. Experto en
                        {' '}<span className='bold'>modernización de sistemas críticos, migraciones exitosas</span>{' '}
                        y desarrollo de {' '}<span className='bold'>APIs RESTful</span>. Apasionado por el
                        {' '}<span className='bold'>aprendizaje continuo</span> y las metodologías ágiles.
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
