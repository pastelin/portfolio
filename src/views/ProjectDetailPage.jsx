import { Link, useParams } from 'react-router-dom';
import { Carousel } from '../components/Carousel';

export const ProjectDetailPage = () => {
    const { projectId } = useParams(); // Obtiene el ID del proyecto desde la URL
    // const project = projectsData.find(p => p.id === projectId);

    // if(!project) {
    // 	return <h2>Proyecto no encontrado</h2>
    // }

    return (
        <main className="project-detail">
            <article>
                <h1 className="project-title-xl">
                    Gif Expert App: Rediseño de UI/UX y Optimización
                </h1>
                <p className="project-description">
                    Una aplicación web desarrollada para buscar y visualizar
                    GIFs de forma dinámica, consumiendo la API de Giphy. El
                    proyecto se centró en transformar una base funcional en un
                    producto final pulido y con una experiencia de usuario de
                    alta calidad.
                </p>
            </article>

            <article>
                <p className="project-actions">
                    <a
                        href="https://example.com/demo"
                        className="project-action-link --principal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver Demo
                    </a>
                    <a
                        href="https://github.com/example/repo"
                        className="project-action-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Código Fuente (Github)
                    </a>
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
                    El objetivo era doble: primero, construir la funcionalidad
                    de una aplicación de búsqueda de GIFs basada en los
                    conceptos de un curso de React. Segundo, y más importante,
                    trascender el proyecto base diseñando y desarrollando desde
                    cero una interfaz de usuario (UI) y una experiencia de
                    usuario (UX) de nivel profesional, enfocándome en la
                    estética, la interactividad y las buenas prácticas.
                </p>
            </article>

            <article>
                <div className="project-section-with-image">
                    <h2 className="project-section-title project--relevant">
                        Mi Solución
                    </h2>
                    <img src="/others/idea.svg" alt="Solution" />
                </div>

                <ol className="project-list">
                    <li className="project-list-item">
                        <span className="tech-name">
                            Arquitectura y Funcionalidad en React:
                        </span>
                        <ul className="project-sublist">
                            <li className="project-sublist-item">
                                Estructuré la aplicación en componentes
                                modulares y reutilizables (GifGrid, GifItem,
                                AddCategory).
                            </li>
                            <li className="project-sublist-item">
                                Creé un{' '}
                                <a
                                    href="https://react.dev/learn/reusing-logic-with-custom-hooks"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-doc"
                                >
                                    <code>Custom Hook</code>
                                </a>{' '}
                                (<code>useFetchGifs</code>) para encapsular y
                                reutilizar la lógica de fetching de datos y el
                                manejo del estado de carga, haciendo el código
                                más limpio y mantenible.
                            </li>
                            <li className="project-sublist-item">
                                Implementé un sistema de categorías dinámico que
                                permite a los usuarios realizar múltiples
                                búsquedas y ver los resultados de forma
                                acumulativa.
                            </li>
                        </ul>
                    </li>
                    <li className="project-list-item">
                        <span className="tech-name">
                            Diseño de UI/UX y Estilo:
                        </span>
                        <ul className="project-sublist">
                            <li className="project-sublist-item">
                                Desarrollé un sistema de diseño completo en CSS
                                utilizando variables para implementar fácilmente
                                temas claro y oscuro que se adaptan a las
                                preferencias del sistema del usuario.
                            </li>
                            <li className="project-sublist-item">
                                Diseñé una interfaz minimalista y moderna,
                                utilizando una cuadrícula responsiva (auto-fit)
                                para que la visualización de los GIFs sea óptima
                                en cualquier dispositivo, desde móviles hasta
                                monitores de escritorio.
                            </li>
                            <li className="project-sublist-item">
                                Añadí microinteracciones y animaciones sutiles
                                (efectos hover con transform y box-shadow) para
                                proporcionar feedback visual al usuario y crear
                                una experiencia más dinámica y agradable.
                            </li>
                        </ul>
                    </li>
                    <li className="project-list-item">
                        <span className="tech-name">
                            Optimización y Buenas Prácticas:
                        </span>
                        <ul className="project-sublist">
                            <li className="project-sublist-item">
                                Corregí un bug en la lógica del fetching de
                                datos al añadir la categoría como dependencia en
                                el{' '}
                                <a
                                    href="https://react.dev/reference/react/useEffect"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-doc"
                                >
                                    <code>useEffect</code>
                                </a>
                                , asegurando que la data se actualice
                                correctamente con cada nueva búsqueda.
                            </li>
                            <li className="project-sublist-item">
                                Mejoré el rendimiento de la aplicación al
                                renderizar listas largas de GIFs mediante la
                                memoización del componente GifItem con{' '}
                                <a
                                    href="https://react.dev/reference/react/memo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-doc"
                                >
                                    <code>React.memo</code>
                                </a>
                                , evitando re-renders innecesarios.
                            </li>
                        </ul>
                    </li>
                </ol>
            </article>

			<article>
				<h2 className="project-section-title project--relevant">
					Carousel de GIFs
				</h2>
				<Carousel />
			</article>

            <article>
                <h2 className="project-section-title">
                    Tecnologías Utilizadas
                </h2>
                <ul className="tools-list">
                    <li className="tools-item">
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tools/react.svg"
                                alt="React"
                                title="React: para la construcción de la interfaz de usuario."
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>
                    <li className="tools-item">
                        <a
                            href="https://developer.mozilla.org/docs/Web/JavaScript"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tools/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript (ES6+): Incluyendo async/await para el manejo de la API."
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>
                    <li className="tools-item">
                        <a
                            href="https://developer.mozilla.org/docs/Web/HTML"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tools/html5.svg"
                                alt="HTML5"
                                title="HTML5"
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>
                    <li className="tools-item">
                        <a
                            href="https://developer.mozilla.org/docs/Web/CSS"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tools/css3.svg"
                                alt="CSS3"
                                title="CSS Moderno: Variables,Flexbox y Grid para un diseño responsivo y adaptable."
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>
                    <li className="tools-item">
                        <a
                            href="https://developers.giphy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tools/api.svg"
                                alt="Giphy API"
                                title="Giphy API: Para la obtención de los GIFs."
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>

                    <li className="tools-item">
                        <a
                            href="https://git-scm.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tools/git.svg"
                                alt="Git"
                                title="Git"
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>

                    <li className="tools-item">
                        <a
                            href="https://vitejs.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tools/vite.svg"
                                alt="Vite"
                                title="Vite: Como herramienta de construcción y servidor de desarrollo."
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>

                    <li className="tools-item">
                        <a
                            href="https://www.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/tools/netlify.svg"
                                alt="Netlify"
                                title="Netlify: Para el despliegue y la integración continua."
                                width="90"
                                height="90"
                            />
                        </a>
                    </li>
                </ul>
            </article>

            <article>
                <h2 className="project-section-title">
                    Resultados y Aprendizajes
                </h2>
                <p className="project-section-description">
                    El resultado es una aplicación web fluida, rápida y
                    estéticamente pulida que no solo es funcional, sino también
                    un placer de usar. Este proyecto fue una excelente
                    oportunidad para profundizar en el manejo del ciclo de vida
                    de React, la creación de custom hooks y, sobre todo, para
                    aplicar principios de diseño de UI/UX para transformar un
                    proyecto funcional en un producto de alta calidad listo para
                    un portafolio.
                </p>
            </article>

            <Link to="/" className="back-link">
                ← Volver al inicio
            </Link>
        </main>
    );
};
