import { Link } from 'react-router-dom';
import '../App.css';
import portraitImg from '../assets/PhotoFille.png';

function About() {
    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-16 flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl">
                <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                    <h1 className="text-4xl md:text-6xl font-serif tracking-wide">À propos</h1>
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors tracking-widest uppercase text-sm border-b border-transparent hover:border-white pb-1 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Retour
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-40 blur transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src={portraitImg}
                                alt="Portrait Viskled"
                                className="relative w-full rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover aspect-[3/4]"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8 text-gray-300 font-light leading-relaxed text-lg">
                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-white first-letter:mr-3 first-letter:float-left">
                            Bienvenue dans mon univers visuel. Je suis <span className="text-white font-medium">Viskled</span>, un photographe passionné par l'art de capturer l'instant et l'émotion brute.
                        </p>
                        <p>
                            Mon travail s'articule autour de trois axes majeurs :
                        </p>
                        <ul className="space-y-4 pl-4 border-l-2 border-white/20">
                            <li className="pl-4">
                                <strong className="text-white block text-xl font-serif mb-1">Le Cosplay</strong>
                                Sublimer le travail minutieux des costumes et donner vie aux personnages à travers des mises en scène immersives.
                            </li>
                            <li className="pl-4">
                                <strong className="text-white block text-xl font-serif mb-1">Le Portrait</strong>
                                Révéler la personnalité et la beauté singulière de chaque visage, dans un style authentique et esthétique.
                            </li>
                            <li className="pl-4">
                                <strong className="text-white block text-xl font-serif mb-1">L'Événementiel</strong>
                                Saisir l'ambiance unique, l'énergie et les moments forts de vos événements pour en garder un souvenir impérissable.
                            </li>
                        </ul>
                        <p>
                            Chaque séance est une nouvelle histoire que nous écrivons ensemble. N'hésitez pas à me contacter pour discuter de vos projets.
                        </p>

                        <div className="pt-4">
                            <Link to="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium tracking-wider hover:bg-gray-200 transition-colors">
                                Me contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
