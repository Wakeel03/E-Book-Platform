import React from 'react'
import StoriesCarousel from './StoriesCarousel'

function TopSection() {
	return (
		<section className="topSection mb-12">
			<div className="container flex flex-col justify-between mb-12 lg:flex-row">
				<h1 className="text-4xl font-medium mb-6 lg:mb-0">Adventure</h1>
				<div className="flex h-12 w-100 px-4 rounded-md border border-gray-900">
					<input placeholder="Search ..." className="text-lg focus:outline-none"/>
				</div>
			</div>

			<StoriesCarousel title="Hottest Stories" subtitle="People are buzzing about these stories today!"/>
		</section>
	)
}

export default TopSection
