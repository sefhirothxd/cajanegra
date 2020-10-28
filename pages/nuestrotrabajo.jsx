import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';

const nuestrotrabajo = () => {
	return (
		<Layout>
			<Header>
				<div className="min-h-screen bg-white flex  justify-center items-center flex-col leading-none">
					<article className="flex  justify-center items-center flex-col mb-10">
						<h1 className="text-dark-100 font-black text-6xl  sm:text-4xl xs:text-2xl sm:text-center mb-2">
							Work Flow
						</h1>
						<p className="font-medium text-lg sm:text-center  xs:text-xs">
							El secreto esta en saber escuchar, somos buenos en eso!
						</p>
					</article>
					<figure className="w-full sm:hidden">
						<img src="/nuestro.png" alt="" className="w-full object-cover" />
					</figure>
				</div>
			</Header>
			<Main>
				<>
					<section>
						<ul className="grid grid-cols-1 grid-rows-1">
							<li className="bg-dark-100 pt-20 pb-32 px-16 xl:px-10 xs:pb-20 lg:px-5 flex justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-white font-Rock text-2xl md:mb-12  mb-20 xl:text-lg lg:text-base md:text-xl xs:text-base">
										BRANDING
									</h3>
									<p className="text-white text-lg mb-4 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										“Una imagen corporativa única que se encuentre siempre en la
										mente del consumidor”
									</p>
									<p className="text-white text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										El branding y el diseño de imagen corporativa apuntan a
										establecer una presencia significativa y diferenciada en el
										mercado, lo que atrae y retiene la fidelidad de los
										consumidores. Creamos los códigos únicos que identificaran a
										tu marca.
									</p>
								</article>
							</li>
							<li className="bg-white pt-16 pb-32 px-16 xl:px-10 xs:pb-20 lg:px-5 flex justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-dark-100 font-Rock text-2xl md:mb-12  mb-20 xl:text-lg lg:text-base md:text-xl xs:text-base">
										PRODUCCIÓN AUDIOVISUAL
									</h3>
									<p className="text-dark-100 text-lg mb-4 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										¿Sabías que los videos son los contenidos en internet que
										más éxito tienen?
									</p>
									<p className="text-dark-100 text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Tenemos experiencia en la producción, realización y
										postproducción audiovisual. Identificamos las necesidades y
										desarrollamos una estrategia de comunicación audiovisual que
										genere impacto en tu target.
									</p>
								</article>
							</li>
							<li className="bg-dark-100 py-20 px-16 xl:px-10 xs:pb-20 lg:px-5 flex justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-white font-Rock text-2xl mb-20 md:mb-12  xl:text-lg lg:text-base md:text-xl xs:text-base">
										GESTIÓN DE RRSS
									</h3>
									<p className="text-white text-lg mb-4 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										“Conéctate con el mundo”
									</p>
									<p className="text-white text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Las redes sociales le permiten conectarse con sus usuarios,
										a través de vías informativas y sociales. Lo ayudamos a
										construir un negocio que se encuentre en constante contacto
										con el cliente, mientras que aumenta su posicionamiento de
										marca y el crecimiento de su reputación.
									</p>
								</article>
							</li>
							<li className="bg-white pb-32 pt-20 xs:pt-20 px-16 xl:px-10 lg:px-5 flex justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-dark-100 font-Rock text-2xl md:mb-12  mb-20 xs:mb-12 xl:text-lg lg:text-base md:text-xl xs:text-base">
										DISEÑO WEB
									</h3>
									<p className="text-dark-100 text-lg mb-4 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										“Construimos sitios web que consiguen clientes”
									</p>
									<p className="text-dark-100 text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Nuestro departamento de desarrollo hará un estudio
										personalizado de tus necesidades y aplicará una solución
										uniforme e integrada con el resto de objetivos de tu
										negocio.
									</p>
								</article>
							</li>
							<li className="bg-dark-100 px-16 pt-16 pb-32 flex xl:px-10 lg:px-5 justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-white font-Rock text-2xl md:mb-12  mb-20  xl:text-lg lg:text-base md:text-xl xs:text-base">
										FOTOGRAFÍA
									</h3>
									<p className="text-white text-lg mb-4 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										“Una fotografía profesional vende más que mil palabras”
									</p>
									<p className="text-white text-lg font-Roboto  xl:text-base lg:text-sm md:text-base xs:text-xs">
										Obtén imágenes de alta calidad que te permitan presentarlo
										de la mejor manera posible e incrementar tus ventas.
									</p>
								</article>
							</li>
							<li className="bg-white px-16 pt-16 pb-24 xs:py-20 flex xl:px-10 lg:px-5 justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-dark-100 font-Rock text-2xl md:mb-12  mb-12 xl:text-lg lg:text-base md:text-xl xs:text-base">
										PERFORMANCE
									</h3>
									<p className="text-dark-100 text-lg mb-4 font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										“No los busques, que ellos te encuentren”
									</p>
									<p className="text-dark-100 text-lg font-Roboto  xl:text-base lg:text-sm md:text-base xs:text-xs">
										Somos especialistas en posicionamiento en Google y todas las
										plataformas de Ads. Nuestro equipo te ayudará a obtener
										mejor visibilidad y mayor tráfico en tu página web. Y a la
										vez, proteja su marca de resultados negativos en buscadores.
										Todo esto con estrategias de SEO y SEM.
									</p>
								</article>
							</li>
							<li className="bg-dark-100 pt-20 pb-32 px-16 flex xl:px-10 lg:px-5 justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-white font-Rock text-2xl mb-20 md:mb-12  xl:text-lg lg:text-base md:text-xl xs:text-base">
										AUTOMATIZACIÓN DIGITAL
									</h3>
									<p className="text-white font-Roboto xl:text-base mb-4 lg:text-sm md:text-base xs:text-xs">
										“El mensaje adecuado en el momento correcto”
									</p>
									<p className="text-white text-lg font-Roboto  xl:text-base lg:text-sm md:text-base xs:text-xs">
										Interactúa con los clientes de forma automática con
										Automatización del Marketing. Campañas basadas en el perfil
										y el comportamiento de tus clientes, recordatorios,
										seguimientos de ventas y mucho más.
									</p>
								</article>
							</li>
							<li className="bg-white py-32 px-16 xs:py-20 flex xl:px-10 lg:px-5 justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-dark-100 font-Rock text-2xl mb-20 md:mb-12  xl:text-lg lg:text-base md:text-xl xs:text-base">
										DISEÑO GRÁFICO
									</h3>
									<p className="text-dark-100 text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Amet fuga nobis ad ratione eveniet, deleniti temporibus quae
										voluptate quas sit harum. Laboriosam quisquam, commodi illo
										consequatur porro omnis non sit.
									</p>
								</article>
							</li>
							<li className="bg-dark-100 py-24 px-16 flex xl:px-10 lg:px-5 justify-center">
								<article className="text-center w-8/12 sm:w-full">
									<h3 className="text-white font-Rock text-2xl mb-20 md:mb-12  xl:text-lg lg:text-base md:text-xl xs:text-base">
										DESARROLLO DE APP
									</h3>
									<p className="text-white text-lg font-Roboto xl:text-base lg:text-sm md:text-base xs:text-xs">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Corporis animi labore tempora voluptas sint eaque, libero
										possimus laborum dolor tenetur sit molestias consequatur cum
										aperiam, perferendis inventore quaerat magnam voluptates!
									</p>
								</article>
							</li>
						</ul>
					</section>
				</>
			</Main>
		</Layout>
	);
};

export default nuestrotrabajo;
