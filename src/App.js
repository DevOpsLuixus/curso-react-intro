import React from 'react';
import './App.css';
import './TodoCounter.css';
import './TodoSearch.css';
import CreateTodoButton from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const defaultTodos = [
  {text: "Reactivar el Firewall", completed:true},
  {text: "Pagar Seguro", completed:false},
  {text: "Hacer Mercado", completed:false}
  
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={20}/>
      <TodoSearch/>
      
      <TodoList>       
      {defaultTodos.map(todo=> (
        <TodoItem key={todo.text} 
        text={todo.text}
        completed ={todo.completed}
        />
      ))}
      
      </TodoList>
      
      <CreateTodoButton/>
    </>
  );
}

export default App;
