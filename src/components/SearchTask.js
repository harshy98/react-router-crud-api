import React from 'react'

const SearchTask = (props) => {
    const {handleuseridChange, handleSearch, userId, filteredTasks} = props
    return(
      <div>
        <h1><strong>SEARCH TASK</strong></h1>
        <form onSubmit={handleSearch}>
        Enter userid:
        <input type="number" value={userId} onChange={handleuseridChange} required/>
        <button type="submit">Search</button>
        </form>
        <br/>
        {filteredTasks.length === 0 ? "USER NOT FOUND": 
          <table>
              <thead>
                <tr>
                  <td><strong>ID</strong></td>
                  <td><strong>USER ID</strong></td>
                  <td><strong>TITLE</strong></td>
                  <td><strong>COMPLETED ?</strong></td>
                </tr>
              </thead>
              
              <tbody>
                {filteredTasks.map(filttask => {
                  return (
                    <tr key={filttask.id}>
                      <td>{filttask.id}</td>
                      <td>{filttask.userId}</td> 
                      <td>{filttask.title}</td> 
                      <td>{filttask.completed ? "YES" : "NO"}</td>
                    </tr>
                  )
                })}
              </tbody>
          </table>
        }
  
      </div>
    )
  }  

export default SearchTask