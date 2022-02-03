import classes from './ToDos.module.css'
import Card from './UI/card/Card';
import Delete from './Delete';
import Checked from './Checked';

const ToDos = ({toDos,setData}) => {
    let list = <h1 className={classes.h1}>No Tasks Found</h1>
    if(toDos.length > 0){
      list = toDos.map(el=>(
            <li className={classes.li} key={el.id}>
                <div className={classes.date}>
                    <strong>{el.date}</strong>
                </div>
                <label className={el.complete ? classes.done : classes.task}>{el.task}</label>
                <Checked id ={el.id} checked = {el.complete} toDos={toDos} setData={setData}/>
                <Delete id = {el.id} className={classes.btnCancel} toDos={toDos} setData={setData}/>
           </li>
        ))
    }
  return <Card>
    <ul>
        {list}
    </ul>
  </Card>
};

export default ToDos;
