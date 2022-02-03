import React from 'react'
import classes from './Checkbox.module.css'
const Checkbox = (props) => {
	return (
		<label className={classes.label}>
			<input
				className={classes.input}
				id={props.id}
				type={props.type}
				onChange={props.onChange}
				checked={props.checked}
			/>
			<span className={classes.span}></span>
		</label>
	)
}

export default Checkbox
