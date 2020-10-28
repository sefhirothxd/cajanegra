import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div className="flex flex-col items-center py-24 px-4">
				<div className="flex flex-col items-center justify-between mb-5">
					<h2 className="text-dark-200 font-inter mb-6 font-black text-4xl sm:text-2xl md:text-3xl">
						CONTÁCTENOS
					</h2>
					<p className="text-light-200 font-bad font-medium text-xl  sm:text-base sm:text-center md:text-lg">
						Hacemos grander cosas para las marcas que amamos y nos encantaria
						amarte a ti también.
					</p>
				</div>
				<div className="flex  justify-items-center">
					<button className="bg-dark-200 py-3 px-12 rounded-sm text-xl md:text-xl sm:text-lg text-white font-black">
						DI HOLA
					</button>
				</div>
			</div>
			<div className="flex justify-center bg-dark-200 items-center py-24 ">
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
