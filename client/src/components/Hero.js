import React from 'react'
import {ReactComponent as HeroIllustration} from "../images/illustrations/Hero.svg"

function Hero() {
	return (
		<section className="container flex mt-8 mb-20">
			<div className="text-center lg:text-left flex-auto mr-4 mt-8">
				<h1 className="text-5xl text-semibold mb-8">Dive into the world of <span className="text-primary-red">Books</span></h1>
				<p className="text-lg font-light mb-16">Submerge yourself into the minds of authors, create your own fantasy world or  just share your your passion to the community</p>
				<p className="text-lg font-light mb-8">Do not waster any more time. Join us <span className="font-medium">today!</span></p>
				<div className="flex justify-center lg:justify-start">
					<button className="btn border border-gray-900 px-10 py-3 mr-4 hover:bg-gray-100">Start Reading</button>
					<button className="btn btn-red px-10 py-3 hover:bg-primary-red-darker">Start Writing</button>
				</div>
			</div>
			<div className="hidden lg:flex lg:w-1/3 xl:w-auto flex-none"><HeroIllustration /></div>
		</section>
	)
}

export default Hero
