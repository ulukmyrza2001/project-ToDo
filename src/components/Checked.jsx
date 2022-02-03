import React from 'react'
import Checkbox from './UI/checkox/Checkbox'

const Checked = ({ id, checked,setData,toDos }) => {
	const checkedToDoHandler = (e) => {
		setData(
			toDos.map((toDo) => {
				if (toDo.id === e.target.id) {
					toDo.complete = !toDo.complete
				}
				return toDo
			}),
		)
	}
	return (
		<Checkbox
			id={id}
			checked={checked}
			onChange={checkedToDoHandler}
			type='checkbox'
		/>
	)
}

export default Checked
