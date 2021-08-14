import React from 'react'
import Header from '../components/Header'
import StoryInfo from '../components/StoryDetail/StoryInfo'
import Chapter from '../components/StoryDetail/Chapter'

function StoryDetail() {
	return (
		<>
			<Header />
			<StoryInfo />
			<Chapter number="1" title="The Mustang"/>
		</>
	)
}

export default StoryDetail
