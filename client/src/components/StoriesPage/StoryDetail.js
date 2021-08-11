import React from 'react'

function StoryDetail({ thumbnail }) {
	return (
		<div className="flex h-xl w-full">
			<img className="h-full w-1/5 rounded-md mb-2 object-cover mr-8" src={thumbnail}/>	
			<div>
				<div className="flex flex-between mb-6">
					<div className="flex-1">
						<h1>The Drift</h1>
						<h2>Ali Mejbri</h2>
					</div>

					<div>
						hey
					</div>
				</div>

				<p>Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of and yourself into the minds of authors, create your own fantasy world submerge mostly into the minds of Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of and yourself into the minds of authors, create your own fantasy world submerge mostly into the minds of Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds.</p>

				<div className="flex justify-between">
					<div className="flex">
						<div>adventure</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StoryDetail
