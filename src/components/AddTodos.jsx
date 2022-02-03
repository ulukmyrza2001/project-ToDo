import React, { useReducer } from 'react'
import classes from './AddToDos.module.css'
import Input from './UI/input/Input'
import Modal from './UI//modal/Modal'
import Button from './UI/button/Button'
import Card from './UI/card/Card'

const taskReducer = (state, action) => {
	if (action.type === 'INPUT_TODO') {
		return {
			value: action.value,
			date: new Date().toLocaleDateString(),
			isValid: null,
		}
	}
	if (action.type === 'INPUT_MODAL') {
		return {
			value: state.value,
			date: state.date,
			isValid: { title: 'Warning!', massage: 'Fill in the fields!' },
		}
	}
	if (action.type == 'INPUT_OK') {
		return {
			value: '',
			isValid: null,
			date: '',
		}
	}
	return {
		value: '',
		date: '',
		isValid: null,
	}
}

const AddTodos = ({ onGetTodoData }) => {
	const [task, dispatchTask] = useReducer(taskReducer, {
		value: '',
		date: '',
		isValid: null,
	})
	const inputChangeHandler = (e) => {
		dispatchTask({ type: 'INPUT_TODO', value: e.target.value })
	}
	const addToDoHandler = (e) => {
		e.preventDefault()
		if (task.value.trim() === '') {
			dispatchTask({ type: 'INPUT_MODAL' })
            return
		}
		const newTask = {
			task: task.value,
			date: task.date,
			complete: false,
			id: Math.random().toString(),
		}
		onGetTodoData(newTask)
        dispatchTask({type : 'MODAL_OK'})
	}

	const confirmHandler = () => {
		dispatchTask({ type: 'MODAL_OK' })
	}
	return (
		<Card>
			<form onSubmit={addToDoHandler}>
				<Input
					className={classes.inputTodo}
					type='text'
					placeholder='Gonna do it...'
					onChange={inputChangeHandler}
					value={task.value}
				/>
                <Button className = {classes.addBtn} type = "submit">Add</Button>
			</form>
			{task.isValid && <Modal	title={task.isValid.title}	massage={task.isValid.massage}	onConfirm={confirmHandler}/>}
		</Card>
	)
}

export default AddTodos
