import React from 'react'

const DeleteTask = (props) => {
    const {handleDelete, handleidChange, id, isFound} = props
    return(
      <div>
        <h1><strong>DELETE TASK</strong></h1>
        <form onSubmit={handleDelete}>
        Enter id:
        <input type="number" value={id} onChange={handleidChange} required/>
        <button type="submit">Delete</button>
      </form>
      <strong>{isFound ? "TASK DELETED" : "task not found"}</strong>
      </div>
    )
}

export default DeleteTask