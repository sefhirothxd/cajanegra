// import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';

export default function Home() {
	return (
		<div className="h-screen">
			<Header>
				<div className="min-h-screen bg-white flex justify-center items-center flex-col leading-none">
					<img
						className="h-screen w-full absolute object-cover"
						src="https://www.madwell.com/wp-content/themes/madwell/images/spinners/spinner0.gif?1603909705303"
					></img>
				</div>
			</Header>
		</div>
	);
}
