import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      placeholder="Escribe tus Tareas"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
