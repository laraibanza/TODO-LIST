import Listitems from "./Listitems";

function ToDoList(props){
  const {todos,deleteItem,completeItem}=props;
    return(
     <div  >
       <ul id="my UL">
       {todos.map((todo,key , idx)=> <Listitems key={key} idx={key} todo={todo} deleteItem={deleteItem} completeItem={completeItem}/>)}
       </ul>
{/* <ul >
  <li> Go to gym</li>
  <li className="checked">Pay the bills </li>
  <li >Go for grocery</li>
  <li>Repair the car</li>
  <li>Read a book</li>
  <li> Visit the park</li>
  <li> Oraganize the books</li>
  

</ul> */}
        

     </div>

    )
}
export default ToDoList 