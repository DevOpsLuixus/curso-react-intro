import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className='CreateTodoButton'
    onClick={
        (event)=> {console.log("Le Diste Click")
            console.log(event)
            console.log(event.target)}
    }>
        +</button>
  );
}

export default CreateTodoButton