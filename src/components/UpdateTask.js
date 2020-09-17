import React from 'react'

const UpdateTask = (props) => {
    const {handleUpdate, handletitleChange, handlecompletedChange, handleidChange, id, title, completed, foundTask} = props
    return(
      <div>
        <h1><strong>UPDATE TASK</strong></h1>
        <form onSubmit={handleUpdate}>
        Enter id:
        <input type="number" value={id} onChange={handleidChange} required/>
        Enter title:
        <input type="text" value={title} onChange={handletitleChange} required/>
        Enter status: 
        <select type="text" value={completed} onChange={handlecompletedChange} required>
            <option value="true">True</option>
            <option value="false">False</option>
        </select>
        <button type="submit">Update</button>
      </form>
      <strong>{foundTask.length !==0 ? "TASK UPDATED" : "error, task not found"}</strong>
      </div>
    )
  }

export default UpdateTask