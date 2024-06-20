import React from "react";
import "./App.css";
import "./TodoCounter.css";
import "./TodoSearch.css";
import CreateTodoButton from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: "Reactivar el Firewall", completed: true },
  { text: "Reactivar el Servidor", completed: false },
  { text: "Pagar Seguro", completed: false },
  { text: "Hacer Mercado", completed: false },
  { text: "Usar estado Derivador", completed: true },
  { text: "Hacer la Comida", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo =  (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text == text
    );

    newTodos[todoIndex].completed =true;
    setTodos(newTodos);
  }

  const deleteTodo =  (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text == text
    );

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}

          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
