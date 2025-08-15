export const GifExpertAppSolutionDetail = () => {
    return (
        <ol className="project-list">
            <li className="project-list-item">
                <span className="tech-name">
                    Arquitectura y Funcionalidad en React:
                </span>
                <ul className="project-sublist">
                    <li className="project-sublist-item">
                        Estructuré la aplicación en componentes modulares y
                        reutilizables (GifGrid, GifItem, AddCategory).
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
                        (<code>useFetchGifs</code>) para encapsular y reutilizar
                        la lógica de fetching de datos y el manejo del estado de
                        carga, haciendo el código más limpio y mantenible.
                    </li>
                    <li className="project-sublist-item">
                        Implementé un sistema de categorías dinámico que permite
                        a los usuarios realizar múltiples búsquedas y ver los
                        resultados de forma acumulativa.
                    </li>
                </ul>
            </li>
            <li className="project-list-item">
                <span className="tech-name">Diseño de UI/UX y Estilo:</span>
                <ul className="project-sublist">
                    <li className="project-sublist-item">
                        Desarrollé un sistema de diseño completo en CSS
                        utilizando variables para implementar fácilmente temas
                        claro y oscuro que se adaptan a las preferencias del
                        sistema del usuario.
                    </li>
                    <li className="project-sublist-item">
                        Diseñé una interfaz minimalista y moderna, utilizando
                        una cuadrícula responsiva (auto-fit) para que la
                        visualización de los GIFs sea óptima en cualquier
                        dispositivo, desde móviles hasta monitores de
                        escritorio.
                    </li>
                    <li className="project-sublist-item">
                        Añadí microinteracciones y animaciones sutiles (efectos
                        hover con transform y box-shadow) para proporcionar
                        feedback visual al usuario y crear una experiencia más
                        dinámica y agradable.
                    </li>
                </ul>
            </li>
            <li className="project-list-item">
                <span className="tech-name">
                    Optimización y Buenas Prácticas:
                </span>
                <ul className="project-sublist">
                    <li className="project-sublist-item">
                        Corregí un bug en la lógica del fetching de datos al
                        añadir la categoría como dependencia en el{' '}
                        <a
                            href="https://react.dev/reference/react/useEffect"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-doc"
                        >
                            <code>useEffect</code>
                        </a>
                        {' '}, asegurando que la data se actualice correctamente con
                        cada nueva búsqueda.
                    </li>
                    <li className="project-sublist-item">
                        Mejoré el rendimiento de la aplicación al renderizar
                        listas largas de GIFs mediante la memoización del
                        componente GifItem con{' '}
                        <a
                            href="https://react.dev/reference/react/memo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-doc"
                        >
                            <code>React.memo</code>
                        </a>
                        {' '}, evitando re-renders innecesarios.
                    </li>
                </ul>
            </li>
        </ol>
    );
};
