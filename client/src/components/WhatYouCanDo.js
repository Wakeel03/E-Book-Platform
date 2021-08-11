import React from 'react'


function WhatYouCanDo() {
	return (
		<section className="container text-center mb-20">
			<h1 className="text-4xl mb-12">What you <span className="text-primary-blue">can do ?</span></h1>

			<div className="flex">
				<div className="flex-1 flex flex-col justify-center items-center mx-8">
					<div className="w-16 h-16 rounded-md bg-primary-blue mb-8 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="white">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
						</svg>
					</div>
					<h1 className="font-medium mb-8 text-lg">Be a Reader</h1>
					<p className="font-light text-center">Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of </p>
				</div>
				
				<div className="flex-1 flex flex-col justify-center items-center mx-8">
					<div className="w-16 h-16 rounded-md bg-primary-red mb-8 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
  							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
						</svg>
					</div>
					<h1 className="font-medium mb-8 text-lg">Be a Writer</h1>
					<p className="font-light text-center">Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of </p>
				</div>

				<div className="flex-1 flex flex-col justify-center items-center mx-8">
					<div className="w-16 h-16 rounded-md bg-secondary-green mb-8 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<h1 className="font-medium mb-8 text-lg">Get Paid</h1>
					<p className="font-light text-center">Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of </p>
				</div>
			</div>
		</section>
	)
}

export default WhatYouCanDo
