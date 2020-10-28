import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';

const merchandising = () => {
	return (
		<Layout>
			<Header>
				<div className="min-h-screen bg-white flex  justify-center items-center flex-col leading-none">
					<h1 className="text-dark-100 font-black text-6xl sm:text-4xl xs:text-2xl md:text-4xl sm:text-center">
						HAS QUE TE RECUERDEN.
					</h1>
					<p className="font-medium text-lg sm:text-center xs:text-base">
						Pero bien.
					</p>
				</div>
			</Header>
			<Main>
				<>
					<section className="bg-dark-100 pt-12 pb-24 px-8 sm:px-6 flex justify-center">
						<div className="w-6/12 lg:w-10/12 sm:w-full xl:w-9/12 ">
							<figure className="flex justify-center mb-12">
								<img src="/logo_cajanegra.png" alt="" />
							</figure>
							<article className="text-center flex-col flex items-center">
								<p className="text-white text-lg md:text-base sm:text-sm xs:text-xs mb-8 font-Roboto w-full xl:w-full">
									Caja Negra es una agencia pequeña con un corazón gigante,
									sabemos que en el mundo de la publicidad la historia se
									reescribe todos los días, por eso mantenemos la mente abierta
									a los cambios estudiamos, aprendemos, evaluamos resultados y
									volvemos a estudiar. Un circulo virtuoso que nos define.
								</p>
								<h3 className="text-white font-Rock sm:text-base text-2xl">
									Una Cultura de Cambio
								</h3>
							</article>
						</div>
					</section>
					<section>
						<ul className="grid grid-cols-2 md:grid-cols-1">
							<li className="bg-dark-100 py-16 md:py-64 px-16 "></li>
							<li className="bg-white pt-16 pb-32 px-16 xl:px-10 xs:pb-20 lg:px-5 flex justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-black font-Rock text-2xl mb-12 xl:text-lg lg:text-base md:text-xl xs:text-base">
										El cambio es constante
									</h3>
									<p className="text-black text-lg mb-8 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										En un mundo donde la tecnología está disolviendo las
										barreras entre los medios y todo parece moverse a la
										velocidad de la luz, el cambio de fluidez es imprescindible.
										La talla única para todos ya no es una opción.
									</p>
									<p className="text-black text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Solo el mensaje correcto entregado a las personas correctas
										en el momento correcto llega.
									</p>
								</article>
							</li>
							<li className="bg-white pb-24 pt-32 xs:pt-20 px-16 xl:px-10 lg:px-5 flex justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-black font-Rock text-2xl mb-20 xs:mb-12 xl:text-lg lg:text-base md:text-xl xs:text-base">
										Un equipo, un mensaje
									</h3>
									<p className="text-black text-lg mb-8 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Un mensaje fuerte y singular proviene de un equipo fuerte e
										integrado. Lo hacemos posible al llevar la trifecta de
										estrategia, creatividad y medios a la mesa bajo un mismo
										techo.
									</p>
								</article>
							</li>
							<li className="bg-dark-100 py-16 md:py-64 px-16 "></li>
							<li className="bg-dark-100 py-16 md:py-64 px-16 "></li>
							<li className="bg-white py-24 px-16 flex xl:px-10 lg:px-5 justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-black font-Rock text-2xl mb-12  xl:text-lg lg:text-base md:text-xl xs:text-base">
										Por qué, quién, cómo, dónde
									</h3>
									<p className="text-black text-lg mb-8 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										En el corazón de nuestro proceso hay un por qué estratégico.
										Junto con un profundo conocimiento de nuestro consumidor,
										sabemos cómo nuestro mensaje debe verse y sonar y dónde
										resonará.
									</p>
									<p className="text-black text-lg font-Roboto  xl:text-base lg:text-sm md:text-base xs:text-xs">
										Combinadas, estas perspectivas conducen a los tipos de
										resultados medibles que crean un cambio real.
									</p>
								</article>
							</li>
							<li className="bg-white py-32 px-16 xs:py-20 flex xl:px-10 lg:px-5 justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-black font-Rock text-2xl mb-12 xl:text-lg lg:text-base md:text-xl xs:text-base">
										Nuestros clientes cambian el espacio
									</h3>
									<p className="text-black text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Nuestros colaboradores ideales son agentes de cambio que
										anhelan una nueva perspectiva. Juntos sacudimos categorías,
										cambiamos de opinión y reconsideramos el status quo.
									</p>
								</article>
							</li>
							<li className="bg-dark-100 py-16 md:py-64 px-16 "></li>
						</ul>
					</section>
				</>
			</Main>
		</Layout>
	);
};

export default merchandising;
