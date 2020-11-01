import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';

const nuestrotrabajo = () => {
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
					<article className="flex absolute bottom-0 xl:pl-10 left-0  pb-30 justify-center items-start flex-col w-full pl-10.9">
						<h1 className="text-white text-36xl font-inter font-hairline sm:text-10xl xs:text-2xl mb-10">
							Nuestro trabajo
						</h1>
						<p className=" text-white pl-5 text-3xl font-black leading-8  xs:text-xs w-5/4 xl:w-7/5">
							Desplácese hacia abajo para ver nuestros estudios de casos
							actuales o navegue por cuenta.
						</p>
					</article>
					<div className="absolute bottom-0 flex items-center xl:pl-10 pb-10 left-0 w-full pl-10.9">
						<p className=" text-white pl-5 text-3xl font-black mr-1">Salta a</p>
						<select
							name="select"
							className="pr-3.8 pt-1.2 outline-none border-b-2 hover:text-light-200 cursor-pointer text-white text-3xl font-black border-white bg-transparent"
						>
							<option className="" value="value1" selected>
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
							<article className=" text-white font-black absolute xl:pl-10 text-4xl top-0 w-4/0 py-10 pl-10.85">
								<p className="text-4xl mb-10">Visible</p>
								<h2 className=" text-10xl ">
									Bienvenido al futuro del servicio telefónico.
								</h2>
							</article>
						</div>
					</section>
				</>
			</Main>
		</Layout>
	);
};

export default nuestrotrabajo;
