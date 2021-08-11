import React from 'react'

function StoryCard({ thumbnail, title }) {
	return (
		<div className="flex flex-col flex-none items-center w-36 mr-12">
			<img className="h-52 w-full rounded-md mb-2 object-cover" src={thumbnail}/>	
			<h2 className="w-full break-words text-md font-medium text-center">{ title }</h2>
		</div>
	)
}

export default StoryCard
