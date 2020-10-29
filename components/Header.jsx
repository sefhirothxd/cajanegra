import React, { useState } from 'react';
import Modal from './Modal';

const Header = (props) => {
	const [modal, setModal] = useState(false);

	return (
		<>
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
		</>
	);
};

export default Header;
