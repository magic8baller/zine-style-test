import React from 'react'
import '../App.scss'
import CardBody from './CardBody'
import CardHeader from './CardHeader'
const Card = ({details}) => {
	return (
		<article className='card'>
			<CardHeader category={details.category} image={details.image} />
			<CardBody title={details.title} text={details.text} />
		</article>
	)
}

export default Card
