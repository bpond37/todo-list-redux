import React, {useState, useEffect} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import axios from 'axios'



export default function Todo(){
    const initialTodos = [
        {tno :3 , title : 'cc' , complete : false},
        {tno :2 , title : 'bb'},
        {tno :1 , title : 'aa'},
    ]
    const [todos, setTodos] = useState(initialTodos)
    // const list = todos.map(({tno,title})=><li key = {tno}>{title}</li>)

    const checkTodo = (tno) =>{
        const arr = todos.slice()
        console.log(arr)
        const target = arr.filter(obj => obj.tno === tno)[0]
        console.log(target)
        const index = arr.indexOf(target)
        console.log(index)
        arr[index] = Object.assign(target, {complete : !target.complete})
        console.log(arr)
        // arr.splice(0)
        setTodos(arr)
    }

    const addTodo = (title) => {
        const arr = todos.slice()
        arr.splice(0,0,{tno: arr[0].tno+1, title: title})
        // let tempNo = arr[arr.length-1].tno+1
        // arr.push({tno : arr[0].tno+1, title: title})
        console.log(arr)
        setTodos(arr)
    }

    return(
        <div>
            <h1>Todo List</h1>
            <TodoInput add = {addTodo}></TodoInput>
            <TodoList todos ={todos} check={checkTodo}></TodoList>
        </div>
    )

    async function fetchPage(page) {
        try {
            const {data} = await axios.get("http://172.20.10.2:8000/todo/pages/" + page)
            const arr = Array.apply(null, Array(data.length)).map((v, i)=>{
                return{
                    tno: data[i].tno,
                    title : data[i].title
                }

                
            })
            // response.data.map(({tno,title})=> arr.push({tno:tno,title:title}))
            console.log(arr)
            setTodos(arr)
            return arr
          
              //   .then(response.data.map(({tno,title})=><li key ={tno}>{title}</li>))
                //   setTodos(arr)
                //   const list = response.data.map(({tno,title})=><li key ={tno}>{title}</li>)
                //   console.log(list)


        } catch (error) {
          console.error(error);
        }
      }
      fetchPage()
    // fetchPage().then(function(value){
    //     setTodos(value)})



      
    //   const list = fetchPage().then(response=>
    //     {
    //         return response.map(({tno,title})=><li key ={tno}>{title}</li>)
            
    //     }
    //     // response.data.map(({tno,title})=><li key ={tno}>{title}</li>)
    //   )
    //     //   console.log(list)
    //   const list1 = list.then(function(value){
    //     console.log(value)  
    //     return value
    //     //   console.log(value)
    //     //   const list1 = value
    //   })
    //   console.log(list1)
    // const list = props.todos.map(({tno,title})=><li key = {tno}>{title}</li>)


    

}