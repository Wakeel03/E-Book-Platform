import React from 'react'
import StoryCard from './StoryCard'
import { useQuery } from '@apollo/client'

import { GET_ALL_STORIES } from '../../API/story'

function StoriesCarousel({ title, subtitle }) {
	const { loading, error, data } = useQuery(GET_ALL_STORIES)
	
	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error :(</p>;

	return (
		<div className="container">
			<h1 className="text-2xl font-medium mb-2">{title}</h1>
			<h2 className="mb-8">{subtitle}</h2>

			<div className="flex overflow-x-scroll no-scrollbar">
				{data.getAllStories.map(story => (
					<StoryCard story={story} />
				))}
			</div>
		</div>

	)
}

export default StoriesCarousel
