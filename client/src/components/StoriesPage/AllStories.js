import React from 'react'
import StoryDetail from './StoryDetail'
import { useQuery } from '@apollo/client'

import { GET_ALL_STORIES } from '../../API/story'

function AllStories() {
	const { loading, error, data } = useQuery(GET_ALL_STORIES)
	
	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error :(</p>;

	return (
		<div className="container">
			<div className="flex items-center justify-between mb-10">
				<h1 className="text-2xl font-medium">All Stories</h1>
				<div className="flex">
					<h2 className="text-xl font-medium mr-8">Sort By</h2>
					<div className="flex items-center justify-center bg-gray-200 border-none h-8 px-4 rounded-md border border-gray-900">Popularity</div>
				</div>
			</div>

			<hr className="mb-10"/>

			<div className="w-full mb-16">
				{data.getAllStories.map(story => (
					<StoryDetail key={story.id} story={story}/>
				))}
			</div>
			
		</div>
	)
}

export default AllStories
