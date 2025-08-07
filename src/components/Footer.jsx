export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-list">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/juan-pastelin-brioso/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img
                                src="/contact/linkedin.svg"
                                alt="Linkedin"
                                width="32"
                                height="32"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/pastelin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <img
                                src="/contact/github.svg"
                                alt="Github"
                                width="32"
                                height="32"
                            />
                        </a>
                    </li>
                    <li>
                        <span className="footer-copy">
                            © {new Date().getFullYear()} Juan Pastelin Brioso.
                        </span>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
