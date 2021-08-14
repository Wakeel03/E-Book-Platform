import React from 'react'

function StoryTag({title, color, marginRight}) {
	return (
		<div className={`bg-${color} text-white py-2 px-4 rounded-3xl mr-${marginRight}`}>
			{title}
		</div>
	)
}

export default StoryTag