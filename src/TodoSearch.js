import React from "react";
function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log("Busqueda: " + searchValue );

  return (
    <input
      placeholder="Estudiar REACT"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
