import { Link } from 'react-router-dom';
import '../App.css';

// Import images
import img1 from '../assets/Galerie/Capture d\'écran 2025-11-19 123725.png';
import img2 from '../assets/Galerie/Capture d\'écran 2025-11-19 123829.png';
import img3 from '../assets/Galerie/Capture d\'écran 2025-11-19 123932.png';
import img4 from '../assets/Galerie/Capture d\'écran 2025-11-19 123947.png';
import img5 from '../assets/Galerie/Capture d\'écran 2025-11-19 124006.png';
import img6 from '../assets/Galerie/Capture d\'écran 2025-11-19 124036.png';

const images = [img1, img2, img3, img4, img5, img6];

function Galerie() {
    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-16">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-4xl md:text-6xl font-serif tracking-wide">Galerie</h1>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors tracking-widest uppercase text-sm border-b border-transparent hover:border-white pb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Retour
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((src, index) => (
                    <div key={index} className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer">
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Galerie;
