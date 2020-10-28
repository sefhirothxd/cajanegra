import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Flecha from '../public/arrow_gray.svg';

const nosotros = () => {
	return (
		<Layout>
			<Header>
				<div className="min-h-screen bg-white flex justify-center items-center flex-col leading-none">
					<img
						className="h-screen w-full absolute object-cover"
						src="https://www.madwell.com/wp-content/themes/madwell/images/spinners/spinner0.gif?1603909705303"
					></img>
					<h1 className="text-dark-100 font-black text-6xl sm:text-4xl xs:text-2xl z-10 sm:text-center">
						PIENSA EN GRANDE
					</h1>
					<p className="font-medium text-lg sm:text-center xs:text-base z-10 ">
						menos es más
					</p>
				</div>
			</Header>
			<Main>
				<>
					<section className="bg-dark-100 pt-24 pb-32 px-8 sm:px-6 flex justify-center">
						<div className="w-6/12 lg:w-10/12 sm:w-full xl:w-9/12 ">
							<figure className="flex justify-center mb-12">
								<img src="/logo_cajanegra.png" alt="" />
							</figure>
							<article className="text-center flex-col flex items-center">
								<p className="text-light-200 leading-relaxed text-lg md:text-base sm:text-sm xs:text-xs mb-8 font-Roboto w-full xl:w-full">
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
						<ul className="flex flex-wrap  max-w-full md:flex-col">
							<li className="bg-dark-200 w-1/2 px-10 py-10 md:w-full ">
								<figure className="w-full flex justify-center">
									<img
										className="w-full md:w-2/4"
										src="https://www.madwell.com/wp-content/themes/madwell/images/mobile/Waves-002.gif"
										alt=""
									/>
								</figure>
							</li>
							<li className="bg-white py-10 px-10 flex lg:px-5 items-center  justify-center md:w-full w-1/2">
								<article className="flex-col justify-center md:text-center xl:w-9/12 md:w-1/2 items-start w-1/2 sm:w-9/12">
									<h3 className="text-dark-200 font-Roboto text-4xl mb-4 xl:text-3xl lg:text-2xl md:text-3xl xs:text-lg">
										El cambio es constante
									</h3>
									<p className="text-light-200 leading-relaxed  text-lg mb-4 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										En un mundo donde la tecnología está disolviendo las
										barreras entre los medios y todo parece moverse a la
										velocidad de la luz, el cambio de fluidez es imprescindible.
										La talla única para todos ya no es una opción.
									</p>
									<p className="text-light-200 leading-relaxed  text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Solo el mensaje correcto entregado a las personas correctas
										en el momento correcto llega.
									</p>
								</article>
							</li>
							<li className="bg-white py-10 px-10  flex  lg:px-5  items-center  justify-center md:w-full w-1/2">
								<article className="flex-col justify-center  md:text-center xl:w-9/12 md:w-1/2 items-start w-1/2 sm:w-9/12">
									<h3 className="text-dark-200 font-Roboto text-4xl mb-4 xl:text-3xl lg:text-2xl md:text-3xl xs:text-lg">
										Un equipo, un mensaje
									</h3>
									<p className="text-light-200 leading-relaxed  text-lg  font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Un mensaje fuerte y singular proviene de un equipo fuerte e
										integrado. Lo hacemos posible al llevar la trifecta de
										estrategia, creatividad y medios a la mesa bajo un mismo
										techo.
									</p>
									<div className="flex md:justify-center justify-start mt-6 ">
										<p className="text-light-200 text-base  leading-relaxed  font-Roboto xl:text-base lg:text-sm md:text-sm xs:text-xs md:mr-8 mr-16">
											mira nuestro servicios
										</p>
										<Flecha className="w-8 md:w-6 sm:w-4" />
									</div>
								</article>
							</li>
							<li className="bg-dark-200 w-1/2 py-10 px-10 flex  md:w-full ">
								<figure className="w-full flex justify-center">
									<img
										className="w-full md:w-2/4"
										src="https://www.madwell.com/wp-content/themes/madwell/images/mobile/Balls-Canvas.gif"
										alt=""
									/>
								</figure>
							</li>
							<li className="bg-dark-200 w-1/2 py-10 px-10 flex md:w-full ">
								<figure className="w-full flex justify-center">
									<img
										className="w-full md:w-2/4"
										src="https://www.madwell.com/wp-content/themes/madwell/images/mobile/Waves-002.gif"
										alt=""
									/>
								</figure>
							</li>
							<li className="bg-white py-10 px-10 flex  lg:px-5 items-center  justify-center md:w-full w-1/2">
								<article className=" flex-col justify-center md:text-center xl:w-9/12 md:w-1/2 items-start w-1/2 sm:w-9/12">
									<h3 className="text-dark-200 font-Roboto text-4xl mb-4 xl:text-3xl lg:text-2xl md:text-3xl xs:text-lg ">
										Por qué, quién, cómo, dónde
									</h3>
									<p className="text-light-200 leading-relaxed  text-lg mb-4 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										En el corazón de nuestro proceso hay un por qué estratégico.
										Junto con un profundo conocimiento de nuestro consumidor,
										sabemos cómo nuestro mensaje debe verse y sonar y dónde
										resonará.
									</p>
									<p className="text-light-200 leading-relaxed  text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Combinadas, estas perspectivas conducen a los tipos de
										resultados medibles que crean un cambio real.
									</p>
								</article>
							</li>
							<li className="bg-white py-10 px-10  flex lg:px-5 justify-center  items-center  md:w-full w-1/2">
								<article className=" flex-col justify-center md:text-center xl:w-9/12 md:w-1/2 items-start w-1/2 sm:w-9/12">
									<h3 className="text-dark-200 font-Roboto  text-4xl mb-4 xl:text-3xl lg:text-2xl md:text-3xl xs:text-lg">
										Nuestros clientes cambian el espacio
									</h3>
									<p className="text-light-200 text-lg  leading-relaxed  font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Nuestros colaboradores ideales son agentes de cambio que
										anhelan una nueva perspectiva. Juntos sacudimos categorías,
										cambiamos de opinión y reconsideramos el status quo.
									</p>
								</article>
							</li>
							<li className="bg-dark-200 w-1/2 px-10 py-10 md:w-full ">
								<figure className="w-full flex justify-center">
									<img
										className="w-full md:w-2/4"
										src="https://www.madwell.com/wp-content/themes/madwell/images/mobile/Spider-Blob_1.gif"
										alt=""
									/>
								</figure>
							</li>
						</ul>
					</section>
				</>
			</Main>
		</Layout>
	);
};

export default nosotros;
