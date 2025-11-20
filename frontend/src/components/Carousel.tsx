import { useState, useEffect } from 'react';

// Import images
import img1 from '../assets/Galerie/Capture d\'écran 2025-11-19 123725.png';
import img2 from '../assets/Galerie/Capture d\'écran 2025-11-19 123829.png';
import img3 from '../assets/Galerie/Capture d\'écran 2025-11-19 123932.png';
import img4 from '../assets/Galerie/Capture d\'écran 2025-11-19 123947.png';
import img5 from '../assets/Galerie/Capture d\'écran 2025-11-19 124006.png';
import img6 from '../assets/Galerie/Capture d\'écran 2025-11-19 124036.png';

const images = [img1, img2, img3, img4, img5, img6];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[60vh] xl:h-[95vh] rounded-sm overflow-hidden shadow-xl">
            {images.map((src, index) => ( // Preload/Render all images but control opacity
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover object-top"
                    />
                    {/* Optional overlay removed to show full image clearly */}
                </div>
            ))}

            {/* Optional: Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
