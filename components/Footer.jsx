import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div className="flex flex-col items-center pb-16 pt-12 px-4">
				<div className="flex flex-col items-center justify-between mb-5">
					<h2 className="text-dark-100 font-inter-Roboto font-black text-5xl sm:text-3xl md:text-4xl">
						CONTÁCTENOS
					</h2>
					<p className="text-dark-100 font-inter-Roboto font-medium text-base sm:text-xs sm:text-center md:text-sm">
						Hacemos grander cosas para las marcas que amamos y nos encantaria
						amarte a ti también.
					</p>
				</div>
				<div className="flex  justify-items-center">
					<button className="bg-dark-100 py-2 px-16 rounded-lg text-3xl md:text-2xl sm:text-xl text-white font-black">
						DI HOLA
					</button>
				</div>
			</div>
			<div className="flex justify-center bg-dark-100 items-center py-24 ">
				<ul className="flex	justify-center  text-white font-black xs:flex-col xs:items-center">
					<li className="mr-10 sm:mr-5 xs:mb-2">
						<Link href="/">
							<a className="text-base sm:text-sm">Inicio</a>
						</Link>
					</li>
					<li className="mr-10 sm:mr-5 xs:mb-2">
						<Link href="/nosotros">
							<a className="text-base sm:text-sm">Nosotros</a>
						</Link>
					</li>
					<li className="mr-10 sm:mr-5 xs:mb-2">
						<Link href="/nuestrotrabajo">
							<a className="text-base sm:text-sm">Nuestro Trabajo</a>
						</Link>
					</li>
					<li className="mr-10 sm:mr-5">
						<Link href="/contactenos">
							<a className="text-base sm:text-sm">contactenos</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
