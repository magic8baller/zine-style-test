import React from 'react'
import '../App.scss'
const Title = () => {
	return (
		<section className="app-title">
			<div className="app-title-content">
				<h1>Current Mood</h1>
				<p>Fall 2019 Musings and Random Stuff</p>
				<a href="http://localhost:3000/" className="designer-link" target="_blank">Curated by <i class="fas fa-quote-left"></i>accidental artists<i class="fas fa-quote-right"></i></a>
			</div>
		</section>
	)
}

export default Title
