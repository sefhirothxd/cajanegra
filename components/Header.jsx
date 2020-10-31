import React, { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link';

const Header = (props) => {
	const [modal, setModal] = useState(false);

	return (
		<div className="relative">
			<Link href="/">
				<figure className="md:hidden absolute pb-5 z-20 left-0 top-0 mt-5 ml-8 cursor-pointer">
					<img src="./logo_cajanegra.png" alt="" />
				</figure>
			</Link>
			<Link href="/">
				<figure className="hidden md:block absolute z-20 pb-5 left-0 top-0 mt-5 ml-8 cursor-pointer">
					<img src="./logo_corto.png" alt="" />
				</figure>
			</Link>
			{modal ? (
				<div
					className="fixed right-0 top-0 mt-6 mr-6 z-30 cursor-pointer h-10 w-10  bg-dark-100 flex justify-end items-center"
					onClick={() => {
						setModal(false);
					}}
				>
					<div className="text-white w-full text-3xl h-10 text-center pt-0">
						x
					</div>
				</div>
			) : (
				<div
					className="fixed right-0 top-0 mt-6 mr-6 z-30 cursor-pointer h-10 w-10 bg-dark-100 flex flex-col justify-center items-center"
					onClick={() => {
						setModal(true);
					}}
				>
					<div className="bg-white w-5/12 h-1.2 mb-1.5"></div>
					<div className="bg-white w-5/12 h-1.2  mb-1.5"></div>
					<div className="bg-white w-5/12 h-1.2 "></div>
				</div>
			)}
			{modal ? <Modal /> : null}
			{props.children}
		</div>
	);
};

export default Header;
