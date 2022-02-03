import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
	return (
		<input
			className={`${classes.input} ${props.className}`}
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
            style={props.style}
		/>
	)
}

export default Input
