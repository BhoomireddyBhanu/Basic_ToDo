import React from 'react';
const TodoList=({todos,deleteHandler})=>{
    return(
       <div>
        <ol>
        {todos.map((todo,index)=>
        <div key={index}><li>{todo} <button onClick={()=>deleteHandler(index)}>Delete</button></li></div>)}
        </ol>
        </div>
    )
}
export default TodoList