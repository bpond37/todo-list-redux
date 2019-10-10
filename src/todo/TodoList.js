import React from 'react'

export default function TodoList (props) {

    // useEffect()
    console.log(props.todos)
    
    const list = props.todos.map(({tno,title})=><li key = {tno}>{title}</li>)

    return(
        <div>
            <h1>TodoList</h1>
            {list}
        </div>
    )
}