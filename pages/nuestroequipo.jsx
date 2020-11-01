import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Flecha from '../public/arrow_gray.svg';

const nuestroequipo = () => {
	return (
		<Layout>
			<Header>
				<div className="flex justify-center items-center py-72 xl:py-60 md:px-0 sm:py-56 px-10 bg-dark-300">
					<h1 className="text-20xl text-white font-extrabold xl:text-11xl xs:text-3xl md:text-6xl sm:text-4xl">
						QUIENES SOMOS
					</h1>
				</div>
			</Header>
			<Main>
				<section className="flex flex-col justify-center items-center pt-28 text-center ">
					<div className="w-4/5 md:w-8/0 xl:w-4/5 bg-white">
						<h2 className="mb-8 text-4xl text-dark-200  md:text-2xl">
							Hicimos Caja Negra
						</h2>
						<p className="leading-snug text-light-200 text-xl md:text-base">
							Nos encanta lo que hacemos aquí, pero eso no es ni la mitad.
							Desplácese hacia abajo (o filtre) para echar un vistazo a nuestras
							extrañas y maravillosas formas.
						</p>
					</div>
					<div className="w-full pt-30 pb-8 px-5">
						<ul className="flex justify-center items-center text-lg flex-wrap text-light-200 italic text-center">
							<li className="mr-10 mb-3 md:text-base font-bold">Todos</li>
							<li className="mr-10 mb-3 md:text-base ">Cuentas</li>
							<li className="mr-10 mb-3 md:text-base ">Copiar</li>
							<li className="mr-10 mb-3 md:text-base ">Creativo</li>
							<li className="mr-10 mb-3 md:text-base ">
								Cultura y operaciones
							</li>
							<li className="mr-10 mb-3 md:text-base ">Diseño</li>
							<li className="mr-10 mb-3 md:text-base ">Desarrollo</li>
							<li className="mr-10 mb-3 md:text-base ">Fundadores</li>
							<li className="mr-10 mb-3 md:text-base ">
								Medios de comunicación
							</li>
							<li className="mr-10 mb-3 md:text-base ">Producción</li>
							<li className="mr-10 mb-3 md:text-base ">Social</li>
							<li className="mr-10 mb-3 md:text-base ">Estrategia</li>
							<li className="mr-10 mb-3 md:text-base ">Más +</li>
						</ul>
					</div>
				</section>
				<section className="px-66 xl:px-5 pt-25 pb-33 bg-fondoCard">
					<div className="grid-cols-3 md:grid-cols-2 xl:gap-y-10 grid gap-5 gap-y-27">
						<div className="">
							<img
								className="w-full border-l border-light-200 "
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
						<div className="">
							<img
								className="w-full border-l border-light-200  "
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
						<div className="">
							<img
								className="w-full"
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
						<div className="">
							<img
								className="w-full border-l border-light-200  "
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
						<div className="">
							<img
								className="w-full border-l border-light-200  "
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
						<div className="">
							<img
								className="w-full   "
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
						<div className="">
							<img
								className="w-full border-l border-light-200  "
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
						<div className="">
							<img
								className="w-full border-l border-light-200  "
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
						<div className="">
							<img
								className="w-full  "
								src="https://www.madwell.com/wp-content/uploads/2019/06/Jess_Abood_Optemized.jpg"
								alt=""
							/>
							<article className="flex flex-col justify-center items-center bg-white py-10">
								<h2 className="mb-2 text-xl xs:text-lg">Jessica Abood</h2>
								<p className="text-tiny italic xs:text-sm">
									Productor creativo
								</p>
							</article>
						</div>
					</div>
				</section>
				<section className="flex flex-col justify-center items-center py-28 text-center">
					<div className="w-5/0 xl:w-5/5 md:w-8/0 bg-white">
						<h2 className="mb-8 text-4xl text-dark-200 md:text-3xl">
							Nuestras oficinas
						</h2>
						<p className="leading-snug text-light-200 text-xl md:text-lg">
							Todo comenzó en un loft de una habitación en Bushwick. Si bien
							dejamos atrás el loft por un lugar más grande en la cuadra,
							todavía estamos en nuestro Bushwick natal, y ahora también en
							Denver.
						</p>
					</div>
				</section>
				<section>
					<div className="grid-cols-2 grid sm:grid-cols-1 sm:grid-rows-661 xs:grid-rows-524">
						<figure>
							<img
								className="object-cover sm:h-full"
								src="https://www.madwell.com/wp-content/uploads/2015/01/BK_3.jpg"
								alt=""
							/>
						</figure>
						<dvi className="bg-dark-300 text-white flex flex-col justify-center items-center">
							<article className="w-5/0 xl:w-7/0 sm:w-8/0 xs:w-9/0">
								<h3 className="mb-8 sm:mb-5 text-4xl md:text-2xl sm:text-3xl  xl:text-3xl">
									Caja Negra Brooklyn
								</h3>
								<p className="mb-12 text-lg sm:mb-12 text-light-200 md:text-xs md:leading-4 sm:leading-6 sm:text-base md:mb-8 xl:text-lg leading-7">
									Caja Negra está en constante movimiento.Nuestros patrones
									climáticos creativos cambian de un momento a otro, de una
									habitación a otra, del patio trasero al balcón, a medida que
									formamos, reformamos y reformamos grupos para trabajar y
									jugar.
								</p>
								<div className="flex items-center hover:text-white text-light-200 md:text-tiny sm:text-base  italic">
									<a href="" className="mr-20">
										El vecindario
									</a>
									<Flecha className="w-8 xl:w-6" />
								</div>
							</article>
						</dvi>
					</div>
					<div className="grid-cols-2 grid sm:grid-cols-1 sm:grid-rows-661 xs:grid-rows-524">
						<div className="bg-white text-dark-200 flex flex-col justify-center items-center">
							<article className="w-5/0 xl:w-7/0 sm:w-8/0 xs:w-9/0">
								<h3 className="mb-8 sm:mb-5 text-4xl md:text-2xl sm:text-3xl  xl:text-3xl">
									Caja Negra Hong Kong
								</h3>
								<p className="mb-12 text-lg sm:mb-12 text-light-200 md:text-xs md:leading-4 sm:leading-6 sm:text-base md:mb-8 xl:text-lg leading-7">
									Nuestros patrones climáticos creativos cambian de un momento a
									otro, de una habitación a otra, del patio trasero al balcón, a
									medida que formamos, reformamos y reformamos grupos para
									trabajar y jugar.
								</p>
								<div className="flex items-center hover:text-white text-light-200 md:text-tiny sm:text-base  italic">
									<a href="" className="mr-20">
										El vecindario
									</a>
									<Flecha className="w-8" />
								</div>
							</article>
						</div>

						<img
							className="object-cover sm:h-full"
							src="https://www.madwell.com/wp-content/uploads/2015/01/Office-Photos-Interior-2.jpg"
							alt=""
						/>
					</div>
					<div className="grid-cols-2 grid sm:grid-cols-1 sm:grid-rows-661 xs:grid-rows-524">
						<figure>
							<img
								className="object-cover sm:h-full"
								src="https://www.madwell.com/wp-content/uploads/2020/01/MW_Website_HKOffice_Photo1.jpeg"
								alt=""
							/>
						</figure>
						<dvi className="bg-dark-300 text-white flex flex-col justify-center items-center">
							<article className="w-5/0 xl:w-7/0 sm:w-8/0 xs:w-9/0">
								<h3 className="mb-8 sm:mb-5 text-4xl md:text-2xl sm:text-3xl  xl:text-3xl">
									Caja Negra Hong Kong
								</h3>
								<p className="mb-12 text-lg sm:mb-12 text-light-200 md:text-xs md:leading-4 sm:leading-6 sm:text-base md:mb-8 xl:text-lg leading-7">
									Nuestros patrones climáticos creativos cambian de un momento a
									otro, de una habitación a otra, del patio trasero al balcón, a
									medida que formamos, reformamos y reformamos grupos para
									trabajar y jugar.
								</p>
								<div className="flex items-center hover:text-white text-light-200 md:text-tiny sm:text-base  italic">
									<a href="" className="mr-20">
										El vecindario
									</a>
									<Flecha className="w-8" />
								</div>
							</article>
						</dvi>
					</div>
				</section>
				<section className="flex flex-col justify-center items-center py-20 text-center">
					<div className="w-5/0 xl:w-5/5 md:w-8/0 bg-white">
						<h2 className="mb-8 text-4xl text-dark-200 md:text-3xl">
							Únete al equipo
						</h2>
						<p className="leading-snug text-light-200 text-xl md:text-lg">
							Siempre estamos buscando a la gente inteligente, decidida y loca
							que necesitamos para ayudar a que el Planeta Madwell siga girando.
							Consulte nuestros listados abiertos a continuación para ver a
							quién estamos contratando en este momento.
						</p>
					</div>
				</section>
				<section>
					<div className="grid-cols-2 grid sm:grid-cols-1 sm:grid-rows-661 grid-rows-915">
						<dvi className="bg-dark-100  flex justify-center items-center">
							<article className="text-light-200 w-5/0 lg:w-6/0">
								<p className="text-xl italic lg:text-base mb-3 ">
									Únete a nosotros
								</p>
								<h3 className="text-white lg:text-2xl text-4.1.2xl font-black mb-15">
									BROOKLYN, NUEVA YORK
								</h3>
								<ul className="text-xl ">
									<li className="mb-2 lg:text-base leading-6 md:mb-1 md:leading-5">
										Estratega senior de comunicaciones, autónomo
									</li>
									<li className="mb-2 lg:text-base leading-6 md:mb-1 md:leading-5">
										Gerente de comunidad
									</li>
									<li className="mb-2 lg:text-base leading-6 md:mb-1 md:leading-5">
										Estratega senior de comunicaciones, redes sociales
									</li>
									<li className="mb-2 lg:text-base leading-6 md:mb-1 md:leading-5">
										Productor Integrado Senior / Gerente de Proyectos
									</li>
									<li className=" lg:text-base leading-6  md:leading-5">
										Gerente de Proyecto, Medios Pagos
									</li>
								</ul>
							</article>
						</dvi>
						<dvi className="bg-fondoEquipoCard py-10 flex justify-center items-center">
							<article className="text-light-200 w-5/0">
								<p className="text-xl italic mb-3 ">Únete a nosotros</p>
								<h3 className="text-white lg:text-2xl text-4.1.2xl font-black mb-15">
									DENVER, CO
								</h3>
								<p className="lg:text-base leading-6 md:leading-5">
									Gerente de comunidad
								</p>
							</article>
						</dvi>
					</div>
					<div className="grid-cols-2 grid sm:grid-cols-1 sm:grid-rows-661 grid-rows-915">
						<dvi className="bg-fondoEquipoCard py-10 flex justify-center items-center">
							<article className="text-light-200 w-5/0 sm:pb-15">
								<p className="text-xl italic mb-3 ">Únete a nosotros</p>
								<h3 className="text-white lg:text-2xl text-4.1.2xl font-black mb-15">
									HONG KONG
								</h3>
								<p className=" lg:text-base leading-6">
									Actualmente no hay posiciones disponibles.
								</p>
							</article>
						</dvi>
						<dvi className="bg-dark-100  flex justify-center items-center">
							<article className="text-light-200 w-5/0 xs:w-6/0">
								<h3 className="text-white lg:text-2xl text-4.1.2xl font-black mb-15">
									Contáctenos
								</h3>
								<p className="mb-10 lg:text-base leading-6">
									¿No ves el puesto que tienes en mente? ¿Necesita más
									información sobre la vista desde la oficina de Denver o
									detalles sobre el gato de la oficina de Brooklyn?
								</p>
								<button className="uppercase py-4 px-12 text-white font-black sm:text-tiny rounded-md bg-dark-200">
									Di Hola
								</button>
							</article>
						</dvi>
					</div>
				</section>
			</Main>
		</Layout>
	);
};

export default nuestroequipo;
