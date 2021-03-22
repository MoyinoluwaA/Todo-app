import React, {useState, useEffect} from 'react'
import Form from './Components/form'
import TodoList from './Components/todoList'
import './App.css';


function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='bg'>
      <div className='page'>
        <section className='top-section'>
          <Form todos={todos} setTodos={setTodos} />
        </section>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
