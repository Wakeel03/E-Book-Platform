import React from 'react'
import StoryTag from './StoryTag'
import { AiFillStar } from "react-icons/ai"

function StoryDetail({ thumbnail }) {
	return (
		<div className="flex h-xl w-full mb-10">
			<img className="h-full w-1/5 rounded-md mb-2 object-cover mr-8 flex-none" src={thumbnail}/>	
			<div className="h-full flex flex-col">
				<div className="flex flex-between mb-6">
					<div className="flex-1">
						<h1 className="text-2xl font-medium mb-2">The Drift</h1>
						<h2>Ali Mejbri</h2>
					</div>

					<div className="flex flex-col">
						<div className="flex mb-2 justify-end">
							<AiFillStar className="h-6 fill-yellow"/>
							<AiFillStar className="h-6 fill-yellow"/>
							<AiFillStar className="h-6 fill-yellow"/>
							<AiFillStar className="h-6 fill-yellow"/>
							<AiFillStar className="h-6 fill-yellow"/>
							<div className="py-1 px-2 bg-gray-200 font-medium text-sm rounded-md ml-4">4.8</div>
						</div>

						<div className="flex">
							<h3 className="mr-4">12K Views</h3>
							<h3>2.3K Likes</h3>
						</div>
					</div>
				</div>

				<p className="leading-8 font-light mb-6 overflow-ellipsis overflow-scroll no-scrollbar">Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of and yourself into the minds of authors, create your own fantasy world submerge mostly into the minds of Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds of and yourself into the minds of authors, create your own fantasy world submerge mostly into the minds of Submerge yourself into the minds of authors, create your own fantasy world submerge yourself into the minds.</p>

				<div className="flex justify-between mt-auto">
					<div className="flex">
						<StoryTag title="adventure" color="primary-blue" marginRight="4"/>
						<StoryTag title="action" color="primary-blue"/>
					</div>

					<div className="hidden lg:flex">
						<StoryTag title="in progress" color="primary-red"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StoryDetail
