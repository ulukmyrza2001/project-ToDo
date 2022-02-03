import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
	return (
		<button
			className={`${classes.button} ${props.className}`}
			type={props.type || 'button'}
			onClick={props.onClick}
			id={props.id}
		>
			{props.children}
		</button>
	)
}

export default Button