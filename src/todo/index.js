import React, {useState, useEffect} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


export default function Todo(){
    const count = 4
    const [todos, setTodos] = useState([
        {tno :1 , title : 'aa'},
        {tno :2 , title : 'bb'},
        {tno :3 , title : 'cc'},
    ])

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${todos[todos.length-1].tno++} times`;
      },[todos]);

    console.log(todos[todos.length-1].tno++)

    const addTodo = (title) => {
        
        console.log(title)
        const tempArr = todos
        console.log(tempArr)
        tempArr.push({tno : todos[todos.length-1].tno++, title: title})
        setTodos(tempArr)
        console.log(tempArr)
        
    }

        return(
            <div>
                <TodoInput add = {addTodo}></TodoInput>
                <TodoList todos ={todos}></TodoList>
            </div>
        )
    

}