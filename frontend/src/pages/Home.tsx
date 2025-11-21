import { Link } from 'react-router-dom';
import '../App.css';
import Carousel from '../components/Carousel';
import SEO from '../components/SEO';
import homePageBg from '../assets/HomePageBackground.jpg';
import aboutBg from '../assets/PhotoFille.png';

function Home() {
    return (
        <main
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${homePageBg})` }}
        >
            <SEO
                title="Viskled Photography - Portrait, Cosplay & Événementiel"
                description="Photographe passionné spécialisé dans le portrait, le cosplay et l'événementiel. Capturez vos moments uniques avec Viskled Photography."
                keywords="Photographe, Portrait, Cosplay, Événementiel, Shooting, Photo, Viskled"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-x-0 top-0 min-h-screen bg-black/10 pointer-events-none"></div>

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
            <div className="relative z-10 flex flex-col gap-4 md:grid md:gap-10 lg:gap-12 p-6 md:px-12 lg:px-14 xl:px-16 md:pb-12 lg:pb-14 xl:pb-16 md:pt-3 lg:pt-3.5 xl:pt-4 mt-0 md:mt-3 lg:mt-3.5 xl:mt-4 w-full max-w-[90rem] mx-auto md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 lg:auto-rows-auto">
                {/* Left Column - Social + About */}
                <div className="contents md:flex md:flex-col md:col-span-2 lg:col-span-2 xl:col-span-2 md:justify-between lg:justify-start xl:justify-between gap-4 md:gap-10 lg:gap-12 w-full">
                    {/* Social Links Card */}
                    <div className="order-1 md:order-none group relative flex flex-col items-center justify-center w-full h-[35vh] md:h-[35vh] lg:h-[38vh] xl:h-[40vh]">
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

                    {/* À propos Card */}
                    <Link
                        to="/about"
                        className="order-3 md:order-none group relative flex flex-col items-center justify-end w-full h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[70vh] -mt-8 md:mt-0 rounded-sm overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-1 shadow-xl"
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
                </div>

                {/* Right Column - Gallery + Contact */}
                <div className="contents md:flex md:flex-col md:col-span-2 lg:col-span-3 xl:col-span-3 md:justify-between lg:justify-start xl:justify-between gap-4 md:gap-10 lg:gap-12 w-full lg:min-h-screen xl:min-h-0">
                    {/* Carousel as Gallery Link */}
                    <Link
                        to="/galerie"
                        className="order-2 md:order-none group relative w-full h-[55vh] md:h-[60vh] lg:h-[50vh] xl:h-auto cursor-pointer transition-transform duration-500 hover:-translate-y-1 shadow-xl"
                    >
                        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-[1.02]">
                            <Carousel />
                        </div>
                    </Link>

                    {/* Contact Card */}
                    <Link
                        to="/contact"
                        className="order-4 md:order-none group relative flex flex-col items-center justify-center w-full h-[35vh] md:h-[25vh] lg:h-[22vh] xl:h-[20vh] rounded-sm overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-1 shadow-xl border border-white/10 bg-black/20 backdrop-blur-sm"
                    >
                        <div className="relative z-10 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <p className="text-2xl font-serif text-white tracking-wider">Contact</p>
                            </div>
                            <span className="text-xs text-gray-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-gray-300 pb-1">
                                Me contacter
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Home;
