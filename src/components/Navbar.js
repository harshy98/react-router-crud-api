import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <Link to='/addtask' style={{color:"red",fontFamily:"Monospace"}}>ADD TASK</Link>
            <Link to='/searchtask' style={{color:"red",fontFamily:"Monospace"}}>SEARCH TASK</Link>
            <Link to='/updatetask' style={{color:"red",fontFamily:"Monospace"}}>UPDATE TASK</Link>
            <Link to='/deletetask' style={{color:"red",fontFamily:"Monospace"}}>DELETE TASK</Link>
        </div>
    )
}

export default Navbar