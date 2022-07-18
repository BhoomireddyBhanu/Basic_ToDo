import React ,{useState}from'react';
import TodoList from './TodoList';
function App(){
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);
  const changeHandler=(e)=>{
    setTask(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
     const newTodos=[...todos,task];
     setTodos(newTodos);
     setTask("");
  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index !== indexValue);
    setTodos(newTodos);
  }
  return (
    
    <div>
      <h5>ToDo-ManagementSystem</h5>
      <form onSubmit={submitHandler}>
      <input type="text" placeholder="your to-do's goes here" value={task} onChange={changeHandler}></input>
      <input type="submit"></input>
      </form>
      <TodoList todos={todos} deleteHandler={deleteHandler} />
    </div>
    
  );
}

export default App;
