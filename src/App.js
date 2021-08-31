import { useState } from 'react'
import'./App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'

const App = () =>{
      
     const dummy_todos=[
       {msg:"Go to gym", isDone:true},
       {msg:"Pay the bills", isDone:true},
       {msg:"Go for grocery", isDone:false},
       {msg:"Repair the car", isDone:false},
       {msg:"Read a book", isDone:false},
       {msg:"Organize the books", isDone:true},
     ]
     const[todos,setTodos]=useState(dummy_todos);
     const deleteItem=(idx)=>{
       console.log(idx)
       const newtodos=todos.filter((val , index)=>{
         return index!==idx
         
       })
        setTodos (newtodos);
     }
     const completeItem=(idx)=>{
       const todoitem=[...todos]
       const ele =todoitem[idx]
       if(ele.isDone){
         ele.isDone=false
       }
       else{
         ele.isDone=true
       }
       todoitem[idx]=ele
       setTodos(todoitem)
           console.log(idx)
           const element=todos[idx]
           console.log(element)
     }


     const addItem = (message) => {
       if(message===undefined){
         alert("Please write something")
         console.log("Empty")
       }
       else{
        setTodos((prvTodos) => {
          return [...prvTodos, {msg: message, isDone : false}]
        }); 
       }
     
    }

  
    return(  
   <div >
       
       < Header getMessage={addItem} />
       <ToDoList todos={todos} completeItem={completeItem} deleteItem={deleteItem} />     
       </div>
       );
   }
   
   export default App;
   
   














   
       
     // const dynamicStyle= {
    //     color:'Violet',
    //     backgroundColor:"azure"
    // }
    // const dynamicStyle1= {
    //     color:'Red',
    //     backgroundColor:"azure"
    // }

    // // function component_1(){
    // //     <>
    // //     <h1>"Hii Its inline"</h1>
    // //     </>
    // // }

    // const st = true;
    // const random ="Started Learning React";
   
       
       /* <h1 style={{color:'Blue',backgroundColor:"azure"}}>
       {random}
    </h1>
    <h2 style={ st? dynamicStyle: dynamicStyle1}>
        "This is the Second component"
    </h2>
   
    <h3 className="component_Style">
      "This is the third component"
    </h3>
    <p className="fcomponent_style">
        "This is the fourth component"
    </p>
  <p>{ st ? <home /> : <No_Data />} </p>
    <Home />
    
     */
   
