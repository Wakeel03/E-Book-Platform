import React from 'react'
import Header from '../components/Header'
import StoryInfo from '../components/StoryDetail/StoryInfo'
import Chapter from '../components/StoryDetail/Chapter'
import { useQuery } from '@apollo/client'
import {gql} from '@apollo/client'


function StoryDetail() {

	const { loading, error, data } = useQuery(GET_STORY)
	
	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error :(</p>;

	if (data) {
		console.log(data)
	}

	return (
		<>
			<Header />
			<StoryInfo />
			<Chapter number="1" title="The Mustang"/>
		</>
	)
}

// GraphQL query example
const GET_STORY = gql`
	{
		getStory(storyId: "611a1464dfb2aa1be8ed9d71"){
			id
			title
			content
			author
		}
	}
`

export default StoryDetail
