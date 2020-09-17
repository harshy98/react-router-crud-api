import React from 'react'

const AddTask = (props) => {

    const {handleuseridChange, handletitleChange, handlecompletedChange, handleSubmit, handleClear, userId, title, completed} = props
      return(
        <div>
          <h1><strong>ADD NEW TASK</strong></h1>
          <form onSubmit={handleSubmit}>
          userid:
          <input type="number" value={userId} onChange={handleuseridChange} required/>
          title:
          <input type="text" value={title} onChange={handletitleChange} required/>
          completed:
          <select type="text" value={completed} onChange={handlecompletedChange} required>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <button type="submit">Submit</button>
          <button onClick={handleClear}>Clear</button>
        </form>
        </div>
      )
      
  }  

export default AddTask