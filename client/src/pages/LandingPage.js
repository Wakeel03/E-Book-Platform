import React from 'react'
import ContactBanner from '../components/ContactBanner'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WhatYouCanDo from '../components/WhatYouCanDo'

function LandingPage() {
	return (
		<div className="landingPage">
			<Header />
			<Hero />
			<WhatYouCanDo />
			<Features />
			<ContactBanner />
			<Footer />
		</div>
	)
}

export default LandingPage
