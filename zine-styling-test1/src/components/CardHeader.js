import React from 'react'
import '../App.scss'
const CardHeader = ({image, category}) => {
	let style = {backgroundImage: `url(${image})`}
	return (
		<div>
			<header style={style} className="card-header">
				<h4 className="card-header--title">{category}</h4>
			</header>
		</div>
	)
}

export default CardHeader
