import { useState } from 'react';

const images = [
    '/projects/gif-expert-app/gif-expert-app-1.png',
    '/projects/gif-expert-app/gif-expert-app-2.png',
];
export const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const [isFading, setIsFading] = useState(false);

    const changeSlide = (newIndex) => {
        setIsFading(true);
        setTimeout(() => {
            setCurrent(newIndex);
            setIsFading(false);
        }, 100); // Duración del fade
    };

    const prev = () =>
        changeSlide((current - 1 + images.length) % images.length);
    const next = () => changeSlide((current + 1) % images.length);

    return (
        <section className="carousel-container">
            <div className="carousel-content">
                <button className="carousel-button prev" onClick={prev}>
                    ⟨
                </button>
                <div
                    className={`carousel-image-wrapper${
                        isFading ? ' fade' : ''
                    }`}
                >
                    <img src={images[current]} alt={`Slide ${current + 1}`} />
                </div>
                <button className="carousel-button next" onClick={next}>
                    ⟩
                </button>
            </div>
            <div className="carousel-dots">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={i === current ? 'active' : ''}
                        onClick={() => changeSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
