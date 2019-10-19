import React from 'react'
import '../App.scss'
import Button from './Button'
const CardBody = ({title, text}) => {
	return (
		<div className="card-body">
			<p className="date">19 October, 2019</p>
			<h2>{title}</h2>
			<p className="body-content">{text}</p>
			<Button />
		</div>
	)
}

export default CardBody
