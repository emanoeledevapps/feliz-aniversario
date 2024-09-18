import LovelyMusic from './assets/audio/lovely-date.mp3';
import Image1 from './assets/img/img-1.jpg';
import Image2 from './assets/img/img-2.jpg';
import Image3 from './assets/img/img-3.jpg';
import Image4 from './assets/img/img-4.jpg';
import Image5 from './assets/img/img-5.jpg';
import Image6 from './assets/img/img-6.jpg';
import Image7 from './assets/img/img-7.jpg';
import Image8 from './assets/img/img-8.jpg';
import Image9 from './assets/img/img-9.jpg';
import Image10 from './assets/img/img-10.jpg';
import Image12 from './assets/img/img-12.jpg';

function App() {

    return (
        <main className='flex flex-col h-screen overflow-y-auto'>
            <audio
                src={LovelyMusic}
                autoPlay={true}
                loop={true}
                className='hidden'
            />

            <section className='flex flex-col items-center bg-container-primary py-20 px-5 lg:px-0'>
                <div className='flex flex-col w-full max-w-[1024px]'>
                    <div
                        className='flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-0'
                    >
                        <div className='flex flex-col justify-center w-full lg:w-[50%] gap-3'>
                            <h1 className='font-bold text-black text-5xl mb-10 lg:mb-0 lg:max-w-[70%] text-center lg:text-start'>Feliz aniversário meu amor</h1>
                            <h2
                                className='text-black text-lg'
                            >
                                Que Deus te abençoe sempre, que te ilumine e que você consiga realizar todos os seus sonhos!
                            </h2>
                        </div>

                        <div className='flex flex-col items-center justify-center w-full lg:w-[50%]'>
                            <img
                                src={Image1}
                                className='w-full h-[400px] object-cover border-[10px] border-white rounded-xl'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center bg-container-secondary py-20 px-5 lg:px-0'>
                <div className='flex flex-col items-center w-full max-w-[1024px]'>
                    <h3 className='text-black text-lg text-center lg:max-w-[70%]'>
                        Hoje é um dia especial em nosso calendário, pois finalmente chegou o seu dia. É um momento de ser feliz, de se alegrar e desejar coisas boas, afinal não são todos os dias que temos um motivo bom para ser comemorado
                    </h3>
                </div>
            </section>

            <section className='flex flex-col items-center bg-container-primary py-20 px-5 lg:px-0'>
                <div className='flex flex-wrap justify-center w-full max-w-[1024px]'>
                    <img
                        src={Image2}
                        className='w-[230px] h-[350px] object-cover border-[10px] border-white rounded-xl rotate-12'
                    />

                    <img
                        src={Image3}
                        className='w-[230px] h-[350px] object-cover border-[10px] border-white rounded-xl'
                    />

                    <img
                        src={Image4}
                        className='w-[230px] h-[350px] object-cover border-[10px] border-white rounded-xl -rotate-12'
                    />

                    <img
                        src={Image5}
                        className='w-[230px] h-[350px] object-cover border-[10px] border-white rounded-xl rotate-12'
                    />

                    <img
                        src={Image6}
                        className='w-[230px] h-[350px] object-cover border-[10px] border-white rounded-xl -rotate-12'
                    />
                </div>
            </section>

            <section className='flex flex-col items-center bg-container-secondary py-20 px-5 lg:px-0'>
                <div className='flex flex-col items-center w-full max-w-[1024px]'>
                    <div
                        className='flex flex-col items-center justify-between gap-10 lg:gap-3 lg:flex-row'
                    >
                        <div className='flex flex-col justify-center w-full lg:w-[49%] gap-3'>
                            <div className='w-full h-[350px] bg-green-600' />
                        </div>

                        <div className='flex flex-col items-center justify-center w-full lg:w-[49%] gap-3'>
                            <h3 className='font-bold text-black text-5xl'>Hoje estamos há 2.613km de distância</h3>
                            <p className='text-black'>Não pude estar com você hoje, infelizmente. Por obra do destino acabou que essa data conciliou com inúmeros imprevistos em nossas vidas, mas mesmo assim estou perto de você em todos os lugares.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center bg-container-primary py-20 px-5 lg:px-0'>
                <h3 className='font-bold text-black text-center text-3xl mb-20'>Te acompanho desde 2020...</h3>
                <div className='flex flex-wrap justify-center w-full max-w-[1024px]'>
                    <img
                        src={Image8}
                        className='w-[250px] h-[350px] object-cover border-[10px] border-white rounded-xl rotate-12'
                    />

                    <img
                        src={Image9}
                        className='w-[250px] h-[350px] object-cover border-[10px] border-white rounded-xl'
                    />

                    <img
                        src={Image10}
                        className='w-[250px] h-[350px] object-cover border-[10px] border-white rounded-xl -rotate-12'
                    />
                </div>
            </section>

            <section className='flex flex-col items-center bg-container-secondary py-20 px-5 lg:px-0'>
                <div className='flex flex-col items-center w-full max-w-[1024px]'>
                    <div
                        className='flex flex-col items-center justify-between gap-10 lg:gap-3 lg:flex-row'
                    >
                        <div className='flex flex-col items-start justify-center w-full lg:w-[49%] gap-3'>
                            <h3 className='font-bold text-black text-5xl'>
                                Obrigado por tudo!
                            </h3>
                            <p className='text-black'>
                                Por mais que o aniversário seja seu, o presente é todo meu. Sempre está comigo em todos os momentos e, me incentiva todos os dias a ser uma pessoa melhor!
                            </p>
                        </div>

                        <div className='flex flex-col justify-center w-full lg:w-[49%] gap-3'>
                            <img
                                src={Image12}
                                className='w-full h-[400px] lg:h-[600px] object-cover border-[10px] border-white rounded-xl'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center bg-container-primary py-20 px-5 lg:px-0'>
                <div className='flex flex-col items-center w-full max-w-[1024px]'>
                    <div
                        className='flex flex-col items-center justify-between gap-10 lg:gap-3 lg:flex-row'
                    >
                        <div className='flex flex-col justify-center w-full lg:w-[49%] gap-3'>
                            <img
                                src={Image7}
                                className='w-full h-[300px] lg:h-[500px] object-cover border-[10px] border-white rounded-xl'
                            />
                        </div>

                        <div className='flex flex-col items-center justify-center w-full lg:w-[49%] gap-3'>
                            <h3 className='font-bold text-black text-5xl'>Seu Pai</h3>
                            <p className='text-black'>Tenho certeza que ele está te dando um abraço lá de cima e, está muito orgulhoso da mulher que se tornou!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center bg-container-secondary py-20 px-5 lg:px-0'>
                <div className='flex flex-col items-center w-full max-w-[1024px]'>
                    <p className='text-black text-center text-lg'>
                        Este site é só um gesto simples para te passar uma mensagem
                    </p>

                    <p className='font-bold text-center text-3xl'>
                        Que eu te amo e você é muito importante para mim! Feliz aniversário.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default App
