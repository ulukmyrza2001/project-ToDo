import { useEffect, useState } from 'react'
import './App.css'
import AddTodos from './components/AddTodos'
import ToDos from './components/ToDos'
function App() {
	const [data, setData] = useState(JSON.parse(localStorage.getItem('todos')) || [])

	const getDataHandler = (newTask) => {
		setData([...data, newTask])
	}
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(data))
		console.log(data)
	}, [data])

	return (
		<div className='App'>
			<h1>To Do...</h1>
			<AddTodos setData = {setData} onGetTodoData={getDataHandler} />
			<ToDos setData={setData} toDos={data} />
		</div>
	)
}

export default App
