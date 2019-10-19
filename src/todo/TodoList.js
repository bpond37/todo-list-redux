import React from 'react'


export default function TodoList ({todos,check}) {

    console.log(todos, check)
    
    const list = todos.map(
        ({tno,title,complete})=>
        <li key = {tno}> {tno}: {title} 
        <input type='checkbox' onChange={()=>check(tno)} checked={complete}/> </li>
        )
    return(
        <div>
            <h3>TodoList</h3>
            <ul>
            {list}
            </ul>
        </div>
    )
}