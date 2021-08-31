import Additem from "./Additem"

function Header(props){
  const ItemValue=(value) =>{
    console.log(value)
    props.getMessage(value);
  }
    return(  
         <div className="header">
           <h1>My To Do List</h1>
           <Additem getItem={ItemValue} />
       </div>
    )
   }
   
   export default Header