import { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/nicolaparmentie@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    return (
        <div className='min-h-screen w-full bg-neutral-900 text-white p-6 flex flex-col items-center'>
            <div className='w-full max-w-4xl flex justify-between items-center mb-12'>
                <h1 className='text-4xl font-bold'>Me Contacter</h1>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors tracking-widest uppercase text-sm border-b border-transparent hover:border-white pb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Retour
                </Link>
            </div>

            <div className='w-full max-w-lg'>
                {status === 'success' ? (
                    <div className="bg-green-900/30 border border-green-500 text-green-100 p-6 rounded-lg text-center shadow-lg animate-fade-in">
                        <h3 className="text-2xl font-serif mb-2">Merci !</h3>
                        <p>Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-4 text-sm uppercase tracking-widest border-b border-green-200 hover:text-white transition-colors"
                        >
                            Envoyer un autre message
                        </button>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col gap-6 bg-neutral-800 p-8 rounded-lg shadow-lg'
                    >
                        {/* Hidden fields for configuration */}
                        <input type="hidden" name="_subject" value="Nouveau message de Viskled" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-lg'>Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                disabled={status === 'submitting'}
                                className='p-3 rounded bg-neutral-700 border border-neutral-600 focus:border-white focus:outline-none disabled:opacity-50'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='text-lg'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                disabled={status === 'submitting'}
                                className='p-3 rounded bg-neutral-700 border border-neutral-600 focus:border-white focus:outline-none disabled:opacity-50'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message" className='text-lg'>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                disabled={status === 'submitting'}
                                className='p-3 rounded bg-neutral-700 border border-neutral-600 focus:border-white focus:outline-none resize-none disabled:opacity-50'
                            />
                        </div>

                        {status === 'error' && (
                            <div className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded border border-red-900/50">
                                Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className='mt-4 bg-white text-black py-3 px-6 rounded font-bold hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center'
                        >
                            {status === 'submitting' ? (
                                <span className="inline-block w-5 h-5 border-2 border-gray-600 border-t-black rounded-full animate-spin"></span>
                            ) : 'Envoyer'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contact;
