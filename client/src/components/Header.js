import React from 'react'

function Header() {
	return (
		<header>
			<nav className="container h-24 flex justify-between items-center mb-12">
				<h1 className="uppercase text-primary-red font-semibold text-xl">Writer</h1>
				<ul className="flex">
					<li className="px-8 cursor-pointer">Explore</li>
					<li className="px-8 cursor-pointer">About Us</li>
					<li className="px-8 cursor-pointer">Contact</li>
				</ul>
				<div>
					<button className="btn border border-gray-900 h-9 w-24 mr-4 hover:bg-gray-100">Login</button>
					<button className="btn btn-blue h-9 w-24 hover:bg-primary-blue-darker">Register</button>
				</div>
			</nav>
		</header>
	)
}

export default Header
