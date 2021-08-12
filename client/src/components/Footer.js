import React from 'react'
import {ReactComponent as TwitterIcon} from "../images/Icons/Twitter.svg"
import {ReactComponent as FacebookIcon} from "../images/Icons/Facebook.svg"

function Footer() {
	return (
		<div className="container h-20 flex items-center justify-between">
			<h2>&copy;Writer 2021. All Rights Reserved</h2>
			<div className="flex items-center">
				<h2 className="mr-16">Terms &amp; Conditions</h2>
				<TwitterIcon className="mr-6"/>
				<FacebookIcon />
			</div>			
		</div>
	)
}

export default Footer
