import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import AddTask from './components/AddTask'
import SearchTask from './components/SearchTask'
import UpdateTask from './components/UpdateTask'
import DeleteTask from './components/DeleteTask'
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
const App = () => {

  const [userId, setuserId] = useState(0)
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [id, setId] = useState(0)
  const [foundTask, setfoundTask] = useState([])
  const [isFound, setisFound] = useState(false)

  const hook = () => {
    fetch("http://jsonplaceholder.typicode.com/todos")
    .then(data => data.json())
    .then(data => setTasks(data))
  }

  useEffect(hook,[])

  const handleuseridChange = (e) => {
    setuserId(e.target.value)
  }

  const handletitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handlecompletedChange = (e) => {
    setCompleted(e.target.value)
  }

  const handleidChange = (e) => {
    setId(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    let newTask = {
      userId: Number(userId),
      id: tasks.length + 1,
      title: title,
      completed: Boolean(completed)
    }
    let newTasks = [...tasks]
    newTasks = newTasks.concat(newTask)
    setTasks(newTasks)
    setuserId(0)
    setTitle('')
    setCompleted(false)

  }

  const handleSearch = (e) => {
      
      e.preventDefault()
      let subset = tasks.filter(task => task.userId === Number(userId))
      setFilteredTasks(subset)

  }

  const handleUpdate = (e) => {

      e.preventDefault()
      let foundIndex = tasks.findIndex(task => task.id === Number(id))
      if(foundIndex !== -1) {
        setfoundTask(foundIndex)
        let updatedTasks = [...tasks]
        updatedTasks[foundIndex].title = title
        updatedTasks[foundIndex].completed = completed 
        setTasks(updatedTasks)
        setTitle('')
        setCompleted(false)
      } else { 
        setfoundTask([])
      }
     
  }

  const handleDelete = (e) => {

    e.preventDefault()
    let foundIndex = tasks.findIndex(task => task.id === Number(id))
    console.log(foundIndex)
    if(foundIndex !==-1) {
      setisFound(true)
      let deletedTasks = [...tasks]
      deletedTasks.splice(foundIndex, 1)
      setTasks(deletedTasks)
    }
    else {
      setisFound(false)
    }

  }

  const handleClear = (e) => {
  
    e.preventDefault()
    setuserId(0)
    setTitle('')
    setCompleted(false)
  
  }

  return (
    <div>
      <h1>React CRUD with routing using fetch API and react-router</h1>
      <h2>Built by github/@harshy98</h2>
      <Navbar/>

      <h3 style={{textAlign:"center"}}><strong>List of Tasks</strong></h3>
      <table>
        
          <tr>
            <td><strong>ID</strong></td>
            <td><strong>USER ID</strong></td>
            <td><strong>TITLE</strong></td>
            <td><strong>COMPLETED ?</strong></td>
          </tr>
        
        
        <tbody>
        {tasks.length === 0 ? "PLEASE WAIT, LOADING..." : tasks.map(task => {
        return (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.userId}</td>
            <td>{task.title}</td>
            <td>{task.completed ? "YES" : "NO"}</td> 
          </tr>
        )
        })}
        </tbody>
      </table>
      <Switch>

          <Route exact path='/addtask' render={(props) => <AddTask 
          handleuseridChange={handleuseridChange} 
          handletitleChange={handletitleChange} 
          handlecompletedChange={handlecompletedChange}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
          userId={userId}
          title={title}
          completed={completed}/>}></Route>

          <Route exact path='/searchtask' render={(props) => <SearchTask 
          handleuseridChange={handleuseridChange} 
          handleSearch={handleSearch} 
          userId={userId} 
          filteredTasks={filteredTasks}/>}></Route>

          <Route exact path='/updatetask' render={(props) => <UpdateTask 
          handleUpdate={handleUpdate} 
          handletitleChange={handletitleChange} 
          handlecompletedChange={handlecompletedChange}
          handleidChange={handleidChange}
          id={id}
          title={title}
          completed={completed}
          foundTask={foundTask}/>}></Route>

          <Route exact path='/deletetask' render={(props) => <DeleteTask 
          handleDelete={handleDelete} 
          handleidChange={handleidChange} 
          id={id}
          isFound={isFound}/>}></Route>

      </Switch>

    </div>
  )

}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,document.getElementById('root'))