import React from 'react'
import {ReactComponent as Features1} from "../images/illustrations/Features1.svg"
import {ReactComponent as Features2} from "../images/illustrations/Features2.svg"

function Features() {
	return (
		<section className="container text-center mb-20">
			<h1 className="text-4xl mb-12">Features</h1>

			<div className="flex mb-12">
				<div className="hidden lg:flex lg:w-1/2 flex-none"><Features1 /></div>
				
				<div className="text-center lg:ml-8 mt-8 text-center flex-auto">
					<div className="w-full bg-primary-red h-14 mb-8 rounded-full lg:rounded-none lg:rounded-l-full flex items-center justify-center">
						<h1 className="text-xl font-medium text-white">Have your say every step of the way</h1>
					</div>
					<p className="text-lg font-light leading-8 px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pulvinar eu ullamcorper interdum cursus lacus, ultrices tristique. Iaculis maecenas lectus id platea pretium vitae.</p>
				</div>
			</div>

			<div className="flex mb-12">
				<div className="text-center lg:mr-8 mt-8 text-center flex-auto">
					<div className="w-full bg-primary-blue h-14 mb-8 rounded-full lg:rounded-none lg:rounded-r-full flex items-center justify-center">
						<h1 className="text-xl font-medium text-white">Support the community</h1>
					</div>
					<p className="text-lg font-light leading-8 px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa pulvinar eu ullamcorper interdum cursus lacus, ultrices tristique. Iaculis maecenas lectus id platea pretium vitae.</p>
				</div>
				
				<div className="hidden lg:flex lg:w-1/2 flex-none"><Features2 /></div>
			</div>
		</section>
			
	)
}

export default Features
