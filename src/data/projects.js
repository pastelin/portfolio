export const projects = [
    {
        id: 'gif-expert-app',
        type: 'Aplicación Web',
        img: {
            src: '/projects/gif-expert-app/principal.gif',
            alt: 'Portfolio GIF',
        },
        demo: {
            title: 'Demo de Gifs',
            image: '/projects/gif-expert-app/principal.gif',
            alt: 'Portfolio GIF',
        },
        title: 'Gif Expert App',
        description:
            'Una aplicación web interactiva para buscar GIFs, desarrollada en React. El reto fue tomar la lógica de un proyecto académico y reconstruir completamente la interfaz para crear una experiencia de usuario (UX) moderna, atractiva y 100% responsiva.',
        // techs: ['React', 'JavaScript (ES6+)', 'CSS Moderno', 'Giphy API'],
        techs: [
            {
                name: 'React',
                icon: '/tools/react.svg',
                link: 'https://react.dev/',
                title: 'React: para la construcción de la interfaz de usuario.',
            },
            {
                name: 'JavaScript (ES6+)',
                icon: '/tools/javascript.svg',
                link: 'https://developer.mozilla.org/docs/Web/JavaScript',
                title: 'JavaScript (ES6+): Incluyendo async/await para el manejo de la API.',
            },
            {
                name: 'HTML5',
                icon: '/tools/html5.svg',
                link: 'https://developer.mozilla.org/docs/Web/HTML',
                title: 'HTML5',
            },
            {
                name: 'CSS Moderno',
                icon: '/tools/css3.svg',
                link: 'https://developer.mozilla.org/docs/Web/CSS',
                title: 'CSS Moderno: Variables,Flexbox y Grid para un diseño responsivo y adaptable.',
            },
            {
                name: 'Giphy API',
                icon: '/tools/api.svg',
                link: 'https://developers.giphy.com/',
                title: 'Giphy API: Para la obtención de los GIFs.',
            },
            {
                name: 'Git',
                icon: '/tools/git.svg',
                link: 'https://git-scm.com/',
                title: 'Git',
            },
            {
                name: 'Vite',
                icon: '/tools/vite.svg',
                link: 'https://vitejs.dev/',
                title: 'Vite: Como herramienta de construcción y servidor de desarrollo.',
            },
            {
                name: 'Netlify',
                icon: '/tools/netlify.svg',
                link: 'https://www.netlify.com/',
                title: 'Netlify: Para el despliegue y la integración continua.',
            },
        ],
        actions: [
            {
                href: 'https://gif-expert-app-pastelin.netlify.app/',
                label: 'Ver Demo',
                isPrincipal: true,
            },
            {
                href: 'https://github.com/pastelin/gif-expert-app.git',
                label: 'Código Fuente (Github)',
                isPrincipal: false,
            },
        ],
        details: {
            title: 'Gif Expert App: Rediseño de UI/UX y Optimización',
            description:
                'Una aplicación web desarrollada para buscar y visualizar GIFs de forma dinámica, consumiendo la API de Giphy. El proyecto se centró en transformar una base funcional en un producto final pulido y con una experiencia de usuario de alta calidad.',
            goalDescription:
                'El objetivo era doble: primero, construir la funcionalidad de una aplicación de búsqueda de GIFs basada en los conceptos de un curso de React. Segundo, y más importante, trascender el proyecto base diseñando y desarrollando desde cero una interfaz de usuario (UI) y una experiencia de usuario (UX) de nivel profesional, enfocándome en la estética, la interactividad y las buenas prácticas.',
            resultsDescription: 'El resultado es una aplicación web fluida, rápida y estéticamente pulida que no solo es funcional, sino también un placer de usar. Este proyecto fue una excelente oportunidad para profundizar en el manejo del ciclo de vida de React, la creación de custom hooks y, sobre todo, para aplicar principios de diseño de UI/UX para transformar un proyecto funcional en un producto de alta calidad listo para un portafolio.'

        }
        
    },
];
