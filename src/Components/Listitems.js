const Listitems = (props) => {
    const{todo,idx ,deleteItem,completeItem}=props;
    console.log(todo,idx)
    return (  
        <div>

            <li className={todo.isDone ? "checked" : " "}  onClick ={()=> completeItem(idx)}>{todo.msg}
            <span className="close" onClick={()=> deleteItem(idx)}> x</span>
            </li>
        </div>
    );
}
 
export default Listitems;