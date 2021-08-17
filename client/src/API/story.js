import {gql} from '@apollo/client'

export const GET_ALL_STORIES = gql`
	{
		getAllStories{
			id
			title
			content
			author
			thumbnail
		}
	}
`