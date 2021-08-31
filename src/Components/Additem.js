import { useState } from "react"

function Additem(props){
   const[item,Setitem]=useState();
   
   const getInputValue = ()=>{
      props.getItem(item);
   }
   return(
    <div> 
    {/* <h2>"Additem Component"</h2> */}
    <form>
        <input   placeholder="Title"  type="text"  id="myInput" value={item}
         onChange={(e)=>Setitem(e.target.value)}/>
        <span  onClick={()=> getInputValue()}     className ="addBtn"> Add </span>
    </form>
</div>
   )
  
}

export default Additem