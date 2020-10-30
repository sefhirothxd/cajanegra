import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<div className="flex justify-center flex-col relative bg-dark-300 items-center py-24 ">
				<div className="mb-18">
					<h3 className="text-light-200 italic">
						Cattivation (n): cualquier activación que implique el uso de un
						gato.
					</h3>
				</div>
				<ul className="flex	justify-center  text-white font-black xs:flex-col xs:items-center mb-16 ">
					<li className="mr-13 sm:mr-5 xs:mb-2">
						<Link href="/">
							<a className="text-base sm:text-sm">Inicio</a>
						</Link>
					</li>
					<li className="mr-13 sm:mr-5 xs:mb-2">
						<Link href="/nosotros">
							<a className="text-base sm:text-sm">Nosotros</a>
						</Link>
					</li>
					<li className="mr-13 sm:mr-5 xs:mb-2">
						<Link href="/nuestrotrabajo">
							<a className="text-base sm:text-sm">Nuestro Trabajo</a>
						</Link>
					</li>
					<li className="">
						<Link href="/contactenos">
							<a className="text-base sm:text-sm">contactenos</a>
						</Link>
					</li>
				</ul>
				<div className="flex items-center mt-1">
					<img
						className="cursor-pointer w-10 mr-5"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEkElEQVRoge2a32scVRTHv+dmk90Qnd0qUSlFJB1/VFzIuqlLMLYL0ogiCKEgiPraqkUf2hf/BGuRUi1KHttCn9oHQSWpD6kxhDDsZgkkUjPRihZMUXCylk2yM3N8yOw62d3Jzszdzeahn6d7754593z3zr1z7twB7rO3oFY5SiaT+3p6eo4CeBHAswAOAngEQJ9jcg/AKoBfACwR0Y+mad4sFAr/tKJ/KSGqqkYVRTlORO8CeBlAV0AXFhHdYObLhmFc03V9I2wsoYQMDw/3bm5uvgfgNID9YTuv4Q4zn1MU5aupqan1oBcHFjI0NPQqM3+OrVunHejMfCqfz08Euci3EFVVo/F4/CyADwOHFgJmvhyNRk/Mzs6W/Nj7EpLJZB41TfMbAGmp6ALCzJppmq8vLCzcbWbbVMjg4OATXV1dNwCoLYkuOMuWZY0WCoXbOxntKCSVSvULIaYBPN3S0IKzIoQY0TTtTy8D4fVDNpuNCSG+Q+dFAMBBy7K+VlU16mXgKaRYLH4GuTlRIqLzQohsJBJ5bGBgIAKgXwjxHBG9BeACgGW/zojosKIo5zx/b9ToLLHfBg79f34FcCyXy600M0yn0xzQ9yu5XG6ytrFuRFRVjTLz+YDO3ZhCiDE/IkJyMZvNxmob64TE4/EPADwVthdmvqppWiHs9T5Qi8XiidrGbUKcyXRaphciui5zvU/O1E78iLuiKMpxSOZOtm3PN2pPp9MnAXzs+I80sgnAgUQiMQbgaqVh24g4WawUsVjM6yn8CYDHIS8CAGDb9jvuelVIMpnch61UXIodciNF1rcbIjqWyWSqPqtCnE1R0P1EJ4mUy+UjlYr71hrpQDBSCCGqQtz366GwDnO5XNPks5FNKpXaL4S4E7ZfAM9UCu4ReVLCYSiISGpbwMzV551byMMyTsMghJDd3zxU9eVqfEDSaWCYeUjSRf2q1SGeb5Uj92T/F66hCoI7g/Wa+CGyXD+sVQruEfmrDR21m78rBbcQvQOBSEFE1Y2ZW8hSB2KRwrbtnyplt5CZDsQiy3SlUBViWdYUAKsj4YSj3N3d/UOlUhXivBX/viMhhWNybm6u4aoFAJd2OZjQENEVd32bEMMwrgGQSeJ2iz9KpdK2LfU2IbqubzCz57ujPcTZxcXFTXdDXYqytrb2JYBbuxZScJYNwxivbawT4ozKR7sTU2BYCPF+o5OthkljPp+fIKKL7Y8rMBc0TWu4snru7JzzwWkiOty+uAIxt76+fqR2blTwTON1Xd8gotewN+bLSiQSecNLBOD/oGcSHdgKO/xs2/bo/Pz8bzsZNd1YFQqF2+VyeYSZtdbF5ps527ZHmokAfL7HWl1dvdfX13cpFospAF5ACz808IKIxg3DeHNpaWmtuXWIgNLp9CiAL9C+W+2WEOKU1+rkRah/1jmqPgngDIADYXw04HcAnxqGMR7mCwjpTzgSicQYM78NYBTBX1CbACaI6EqpVLq+06rUjJbd65lMRimXy0eFEC8x8yFsHWf3A3jQMSkCuEtEurOzm+7t7b05MzNTbFUM99lL/Aec3m69FKrUwAAAAABJRU5ErkJggg=="
					/>
					<img
						className="cursor-pointer w-10 mr-5"
						src="data:image/png;base64,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"
					/>
					<img
						className="cursor-pointer w-10 mr-5"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE0klEQVRoge1Z32scVRT+zt3Nsg9KxYfU9tHEFAybZubOlIQgBowEooKpriQNiM/5C7QVfLG++Zx3bWyFagpNRFsq9aUm7MxszLgQId03ayyFVKlkmLBzfHCSTjY7s/MjjRT2e5p77zn3ft/cH+f+ADrooIMOniZQGh9N03QAE57nvUhE3cycy0SCqMHM94UQdSJaqlQqBgBOVEcSW1VVy0T0KYCXEjFNjt+I6GPDML5BTEGxhPT39z9TLBa/BPB2FnYpsJTP58+trKz83c6wrZCRkZFnHce5DUA9FGrJYTqOM1qr1R5FGYk2ldD29vYlHK2IGwA+BHDTT8tisfgF2vz0yEJVVd8joq8Ph18s3DBNczzQ/k0iGgMAInrXnzMtEdUj5E/so8SPTQRu7X4z80VE/PhQIf4S+6RXp2a8Fvim3d7wcUpRFBnmmI+odCIjqU0ANoA//PQJAAMAjkf4vO4Pp1tENMbMQWEQQkwAMFo5hgrxg10i5gA8Zp5n5rlqtboCwGsqF7quD3meNwtgGi1GhN8LY8wtw0dPWMOhQojohVjUH2Pd87yparX6S4SNV6lU7gC4o2na58x8BUBfgjZCOUVN9q4EDdxuNBrDbUTsg2EYVdd1h5j5pwTtFMIKouZIXKw3Go3J1dXVh80FUspjzNwLAES0YZrmX8Fy27a3SqXSZKFQWEaynjmAdgGxHTwhxHSzCEVRTkspFwE8ICKDiAwAD6SU11VVHQja2ra9xczncHA+JUImIcw8X6lUVoN5mqa9I4RYBvAG9vd4HsCbRLSiqurZoI9lWSaAy1m4ZBUyF0wrinKamS8BKEa4FYloXkpZCmYS0VyYQxxkEbLpL7GPKxPiIqJF7KII4LNghmEYPwP4My2ZLEJsBMb14ODgcwDGw80PYFxKeSyQ9pjZTksmi5B7wQQR9SLZKtiFpgBHRPdCbNsii5B9YZ+IEh1NW/kwc5qjN4BsQk4EE0S0AWAngf9OLpe7u4+MECfTkskiZCDo7we7H+I6E9H3wSNsuVzOMXMpyicKWYQc13V9KJjBzBcAODF8twGcD2bU6/VhAN1pyWSKI/4udg+WZa0x8wyixWwz84xhGL825c+2tI6JrFuUaU3TlGCGZVnfAjgDYBH758wOEV0nojOWZS0EfXRd1wFMZSGSddMomPlKqVQasm17azfTNE0bwFt+nOgBgHw+v9HqWmd4ePh513W/QrrLwj0cxu63r6ura6FUKk0GxQB7C4AV5uiLuAagNyuJqKEVeyklolcLhcKylDL2tZGu67rruisAXonrA8ANKwjtEWbeTHjU7QNQkVJeJqI5f++0b2teLpdz/uo063neFJIPp82wglAhQoh6yLk5CgLADDPPSCnvE5HNzL8zMwkhTtbr9RIyLLEA7oYVRJ3Zl5j5kwyNdu/eghARUvyUVlgMK4jqWpJSriPjEfQQsW6a5ssIuZ2PmuxMRBeeDKdU+AgRTwyRAdG/a12IsjkiXDVN81qUQbvIzo7jvA/APDxOyUBExs7Ozgft7NpuUWq12iPHcUbx//TMVdd1R9fW1v5pZ5jo6U3TtLP+rfip9NxiYZ2ZzzfvyaKQ6jFUURTpXyj3ADh+GI+h+O/iYYOZv7Msy0LCx9AOOuigg6cL/wKKYr417yONKAAAAABJRU5ErkJggg=="
					/>
				</div>
				<div className=" flex absolute bottom-0 justify-center  w-87">
					<div className="bg-barra-100 h-2 w-1/6"></div>
					<div className="bg-barra-200 h-2 w-1/6"></div>
					<div className="bg-barra-300 h-2 w-1/6"></div>
					<div className="bg-barra-400 h-2 w-1/6"></div>
					<div className="bg-barra-500 h-2 w-1/6"></div>
					<div className="bg-barra-600 h-2 w-1/6"></div>
					<div className="bg-barra-700 h-2 w-1/6"></div>
					<div className="bg-barra-800 h-2 w-1/6"></div>
					<div className="bg-barra-900 h-2 w-1/6"></div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
