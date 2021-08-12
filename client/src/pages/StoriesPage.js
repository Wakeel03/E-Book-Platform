import React from 'react'
import Header from '../components/Header'
import AllStories from '../components/StoriesPage/AllStories'
import TopSection from '../components/StoriesPage/TopSection'

function StoriesPage() {
	return (
		<div className="storiesPage">
			<Header />
			<TopSection />
			<AllStories />
		</div>
	)
}

export default StoriesPage
