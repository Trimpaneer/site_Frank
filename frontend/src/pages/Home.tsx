import { Link } from 'react-router-dom';
import '../App.css';
import Carousel from '../components/Carousel';
import homePageBg from '../assets/HomePageBackground.jpg';
import galerieBg from '../assets/GaleriePhotos.png';
import aboutBg from '../assets/PhotoFille.png';

function Home() {
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${homePageBg})` }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

            {/* Title Section */}
            <div className="relative pt-12 pl-8 xl:pt-20 xl:pl-16 z-10 mb-8 xl:mb-12">
                <h1 className="text-6xl xl:text-8xl font-serif text-white tracking-wide">Viskled Photos</h1>
                <p className="text-xl xl:text-2xl text-gray-200 font-light tracking-[0.2em] mt-2 uppercase">
                    Portrait | Cosplay | Événements
                </p>
                <p className="text-sm xl:text-base text-gray-300 font-light tracking-wider mt-4 opacity-80">
                    📩 Tarifs & demande de devis disponible en DM
                </p>
            </div>

            {/* Grid Layout for Cards */}
            <div className="relative z-10 grid gap-8 xl:gap-12 p-6 xl:px-16 xl:pb-16 xl:pt-4 mt-0 xl:mt-4 w-full max-w-[90rem] mx-auto xl:grid-cols-5 xl:auto-rows-min">
                {/* Social Links Card */}
                <div className="group relative flex flex-col items-center justify-center w-full h-[35vh] xl:h-[90vh] xl:col-span-3 xl:-mt-20">
                    <div className="relative z-10 text-center w-full flex flex-col items-center justify-center h-full p-4">
                        <p className="text-2xl font-serif text-white tracking-wider mb-4">Réseaux</p>
                        <div className="flex flex-col items-center gap-6 w-full">
                            {/* Row 1 */}
                            <div className="flex flex-wrap justify-center items-center gap-4 xl:gap-8 w-full">
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/viskled.photos/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-pink-500 transition-all transform hover:scale-105 duration-300 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10 xl:translate-y-4"
                                    title="Instagram"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                    <span className="text-sm font-medium tracking-wide">Instagram</span>
                                </a>
                                {/* TikTok */}
                                <a
                                    href="https://www.tiktok.com/@viskled"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-all transform hover:scale-105 duration-300 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10 xl:-translate-y-2 xl:translate-x-2"
                                    title="TikTok"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                    </svg>
                                    <span className="text-sm font-medium tracking-wide">TikTok</span>
                                </a>
                                {/* YouTube */}
                                <a
                                    href="https://www.youtube.com/@viskled.photos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-red-500 transition-all transform hover:scale-105 duration-300 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10 xl:translate-y-2 xl:-translate-x-2"
                                    title="YouTube"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                    </svg>
                                    <span className="text-sm font-medium tracking-wide">YouTube</span>
                                </a>
                            </div>

                            {/* Row 2 */}
                            <div className="flex flex-wrap justify-center items-center gap-4 xl:gap-8 w-full">
                                {/* Discord */}
                                <a
                                    href="https://discord.com/invite/ys5fdyDjNy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-indigo-400 transition-all transform hover:scale-105 duration-300 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10 xl:-translate-y-2 xl:translate-x-2"
                                    title="Discord"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21.75 12.75C22.5 16.5 20.25 20.25 18 21C16.5 21.75 15 21.75 13.5 21.75C12 21.75 10.5 21.75 9 21C6.75 20.25 4.5 16.5 5.25 12.75C6 9 9 6 13.5 6C18 6 21 9 21.75 12.75Z" />
                                        <path d="M15.75 12C15.75 12 16.5 12 16.5 13.5C16.5 15 15.75 15 15.75 15" />
                                        <path d="M11.25 12C11.25 12 10.5 12 10.5 13.5C10.5 15 11.25 15 11.25 15" />
                                    </svg>
                                    <span className="text-sm font-medium tracking-wide">Discord</span>
                                </a>
                                {/* Support */}
                                <a
                                    href="https://lnk.bio/viskled.photos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-pink-400 transition-all transform hover:scale-105 duration-300 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10 xl:-translate-y-2 xl:-translate-x-2"
                                    title="Soutenir"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                    <span className="text-sm font-medium tracking-wide">Me soutenir</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel */}
                <div className="xl:col-span-2">
                    <Carousel />
                </div>

                {/* Galerie Card */}
                <Link
                    to="/galerie"
                    className="group relative flex flex-col items-center justify-end w-full h-[45vh] xl:h-[110vh] xl:col-span-3 xl:-mt-32 rounded-sm overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-1 shadow-xl"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${galerieBg})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative z-10 pb-8 text-center">
                        <p className="text-4xl xl:text-5xl font-serif text-white tracking-wider mb-2">Galerie</p>
                        <span className="text-sm text-gray-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-gray-300 pb-1">
                            Voir les photos
                        </span>
                    </div>
                </Link>

                {/* À propos Card */}
                <Link
                    to="/about"
                    className="group relative flex flex-col items-center justify-end w-full h-[35vh] xl:h-[90vh] xl:col-span-2 rounded-sm overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-1 shadow-xl"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-bottom transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${aboutBg})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative z-10 pb-6 text-center">
                        <p className="text-2xl font-serif text-white tracking-wider mb-2">À propos</p>
                        <span className="text-xs text-gray-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-gray-300 pb-1">
                            En savoir plus
                        </span>
                    </div>
                </Link>

                {/* Contact Card */}
                <Link
                    to="/contact"
                    className="group relative flex flex-col items-center justify-center w-full h-[35vh] xl:h-[25vh] xl:col-span-5 rounded-sm overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-1 shadow-xl border border-white/10 bg-black/20 backdrop-blur-sm"
                >
                    <div className="relative z-10 text-center">
                        <p className="text-2xl font-serif text-white tracking-wider mb-2">Contact</p>
                        <span className="text-xs text-gray-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-gray-300 pb-1">
                            Me contacter
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
