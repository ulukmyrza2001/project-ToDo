import React,{useState} from 'react'
import Button from './UI/button/Button'
import Modal from './UI/modal/Modal'


const Delete = ({ id,className,setData,toDos }) => {
    const [modalDelete,setModalDelete] = useState(null)
    const [idBtn,setIdBtn] = useState('')
    const deleteToDoHandler = (e) =>{
        setIdBtn(e.target.id)
        setModalDelete({title:'Note',massage : 'Are you sure?'})
    }
    const deleteOkHandler = () =>{
        setData(toDos.filter((el)=>el.id !== idBtn))
        setModalDelete(null)
    }
    const  modalNoHandler = () =>{
        setModalDelete(null)
    }
	return (
		<>
			<Button onClick={deleteToDoHandler} id={id}>
				Delete
			</Button>
			{modalDelete && 
				<Modal
					title={modalDelete.title}
					massage={modalDelete.massage}
					onConfirm={deleteOkHandler}>
				    <Button className = {className} onClick={modalNoHandler}>Cancel</Button>
				</Modal>
			}
		</>
	)
}

export default Delete
