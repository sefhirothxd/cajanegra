import React from 'react';
import Link from 'next/link';

const Modal = () => {
	return (
		<div className="fixed left-0 top-0 w-full h-full bg-dark-100 z-20 flex items-end pl-20 pb-10  transition-all ease-in-out scale-95  duration-500">
			<ul className="">
				<li className="">
					<Link href="/">
						<a className="text-white text-6xl font-Roboto font-bold hover:text-greyy-400">
							Inicio
						</a>
					</Link>
				</li>
				<li className="">
					<Link href="/nosotros">
						<a className="text-white text-6xl font-Roboto font-bold hover:text-greyy-400">
							Nosotros
						</a>
					</Link>
				</li>
				<li className="">
					<Link href="/nuestrotrabajo">
						<a className="text-white text-6xl font-Roboto font-bold hover:text-greyy-400">
							Nuestro Trabajo
						</a>
					</Link>
				</li>
				<li className="">
					<Link href="/merchandising">
						<a className="text-white text-6xl font-Roboto font-bold hover:text-greyy-400">
							Merchandising
						</a>
					</Link>
				</li>
				<li className="">
					<Link href="/">
						<a className="text-white text-6xl font-Roboto font-bold hover:text-greyy-400">
							Contactenos
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Modal;
