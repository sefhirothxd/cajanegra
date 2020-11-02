import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';

const nuestrotrabajo = () => {
	const [screen, setScreen] = useState(false);

	useEffect(() => {
		const updateWindowDimensions = () => {
			const ancho = window.innerWidth;
			ancho < 881 ? setScreen(true) : setScreen(false);
		};

		window.addEventListener('resize', updateWindowDimensions);

		return () => window.removeEventListener('resize', updateWindowDimensions);
	});

	return (
		<Layout>
			<Header>
				<div className="min-h-screen relative bg-white flex  justify-center items-center flex-col leading-none">
					<figure className="h-screen w-full">
						<img
							src="http://www.madwell.com/wp-content/uploads/2019/06/MW_Client_Project_image00_large-desktop.jpg"
							alt=""
							className="w-full h-full object-cover"
						/>
						<div className="h-full absolute w-6/0 bg-gradient-to-tr bg-dark-200 top-0 opacity-09"></div>
					</figure>
					<article className="flex absolute bottom-0 xl:pl-12 xs:pl-5 left-0 xs:top-0 xs:bottom-auto xs:pt-40  pb-30 justify-center items-start flex-col w-full pl-10.865">
						<h1 className="text-white text-36xl font-inter font-hairline sm:text-10xl xs:text-6xl mb-10">
							Nuestro trabajo
						</h1>
						<p className=" text-white pl-5 sm:pl-0 text-3xl font-black leading-8 sm:w-9/0  xs:text-xl w-5/4 xl:w-7/5">
							Desplácese hacia abajo para ver nuestros estudios de casos
							actuales o navegue por cuenta.
						</p>
					</article>
					<div className="absolute bottom-0 flex items-center text-3xl xs:text-sm sm:text-lg xl:pl-12 xs:pl-5 pb-10 left-0 w-full pl-10.865">
						<p className=" text-white pl-5 sm:pl-0 font-black mr-1">Salta a</p>
						<select
							name="select"
							className="pr-2.1 md:pr-3.1 pt-1.2 outline-none border-b-2 hover:text-light-200 cursor-pointer text-white font-black border-white bg-transparent"
						>
							<option className="" value="uncliente" selected>
								un cliente
							</option>
						</select>
					</div>
				</div>
			</Header>
			<Main>
				<>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/05/Image001_MW_Visible_InVisibleNY_large-desktop.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">Visible</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl ">
									Bienvenido al futuro del servicio telefónico.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/09/MW_HH_SuspiciouslyGood_image00_large-desktop2.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">
									Cosecha inofensiva
								</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Tan bueno que es sospechoso.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/06/00_MW_HF_ThisIsHappy_TitlePanel.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">
									Orgánicos familiares felices
								</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Así es como se nutre feliz.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2020/01/MW_SFA_00_Hero.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">
									Asociación de alimentos especializados
								</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Remodelando una leyenda de la industria.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/06/Image001_MW_Lycored_LargeDesktop.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">Lycored</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Cultivando el líder en nutracéuticos.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/06/MW_NYRR_hero.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">
									Corredores de carretera de Nueva York
								</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Te conmoverá.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/10/MW_AbsolutElyx_CaseStudy_image00_large-desktop.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">Absolut Elyx</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Una campaña más para un vodka más.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2020/06/MW_Constellation_Header_LG.png"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">Constelación</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Para un equipo estrella, una marca a la altura.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/06/Image001_MW_Rockport_S17Lifestyle_TitlePanel_large-desktop.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">Rockport</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									La artesanía clásica se convierte en estilo moderno.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2020/01/Img001_MW_Jura_Hero_Large-Desktop.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">Jura</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Celebrando el espíritu de una isla escocesa.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/06/Image001_MW_Zarbees_large-desktop.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">Visible</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Bienvenido al futuro del servicio telefónico.
								</h2>
							</article>
						</div>
					</section>
					<section className="h-88.1">
						<div className="h-full relative flex justify-start">
							<figure className="h-full w-full">
								<img
									className="h-full w-full object-cover"
									src="http://www.madwell.com/wp-content/uploads/2019/06/verizon-3.jpg"
									alt=""
								/>
							</figure>
							<article className="absolute bottom-0 xl:pl-15 xs:pl-5 xs:top-0 transition duration-700 ease-in-out text-white font-black pt-15 left-0 pb-30 pl-10.855 cursor-pointer bg-gradient-to-tr hover:bg-dark-200 top-0 hover:bg-opacity-60 w-full">
								<p className="text-4xl sm:text-xl mb-10 z-10">
									Productos naturales de Zarbee
								</p>
								<h2 className=" text-10xl sm:text-5xl z-10 w-5/0 md:w-full xs:text-4xl  ">
									Mantener sana toda la colmena.
								</h2>
							</article>
						</div>
					</section>
					<section className="flex justify-center items-center pt-12 pb-20 xl:justify-start xl:pl-15  md:pl-5">
						<div className="h-full w-7/0 md:w-9/0 ">
							<article className="mb-15 xs:mb-10">
								<hr className="font-black w-3/0 md:w-7/0" />
								<p className="text-lg mt-4 mb-15 md:mb-8 font-black ">
									Verizon
								</p>
								<h2 className=" text-5xl font-black md:text-2xl sm:w-9/0">
									La red más fuerte de todas: la tuya.
								</h2>
							</article>
							<figure className="w-full">
								<img
									className="h-full w-full"
									src={
										screen
											? 'https://www.madwell.com/wp-content/uploads/2020/01/Clients-Partners-mobile_V3_r2.png'
											: 'https://www.madwell.com/wp-content/uploads/2020/01/Clients-Partners-desktop_V3_r2.png'
									}
									alt="Lista de clientes"
								/>
							</figure>
						</div>
					</section>
				</>
			</Main>
		</Layout>
	);
};

export default nuestrotrabajo;
