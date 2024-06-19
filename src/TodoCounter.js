import './TodoCounter.css'
function TodoCounter ({completed, total}){
    
    return (
        <h1 className='TodoCounter'>
            Has Completado {completed} de {total} Tareas
        </h1>
    );
}

export {TodoCounter}