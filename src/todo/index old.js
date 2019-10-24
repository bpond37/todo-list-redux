import React, {useState, useEffect} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Todo(){
//   console.log(props)
//   const {text} = props
// const initialTodos = [
//         {tno :3 , title : 'cc'},
//         {tno :2 , title : 'bb'},
//         {tno :1 , title : 'aa'},
//     ]
        
//   const [todos, setTodos] = useState(text)
        
    // useEffect(()=>{
    //     console.log("useEffect....")

    //     async function fetchPage(page) {
    //         const {data} = await axios.get("http://172.20.10.2:8000/todo/pages/" + page)
    //         const arr = data.map(({tno,title,complete})=>{
    //             console.log(tno,title,complete.data[0])
    //             return {tno:tno, title:title, complete:complete.data[0]}
    //         })
    //         console.log(arr)
    //         setTodos(arr)
    //       }
    //     fetchPage(2);
    // },[])

//   const addTodo = (title) => {
//     const arr = todos.slice()
//     arr.splice(0,0,{tno: arr[0].tno+1, title: title})
//     console.log(arr)
//     setTodos(arr)
//   }

//   const checkTodo = (tno) =>{
//     const arr = todos.slice()
//     const target = arr.filter(obj => obj.tno === tno)[0]
//     const index = arr.indexOf(target)
//     arr[index] = Object.assign(target, {complete : !target.complete})
//     setTodos(arr)
// }

//   const updateTodo = (tno,title) =>{
//     const arr = todos.slice()
//     const target = arr.filter(obj => obj.tno === tno)[0]
//     const index = arr.indexOf(target)
//     console.log(target)
//     console.log("title",title)
//     arr[index] = Object.assign(target, {isEditing : !target.isEditing})
//     if(target.isEditing){
//         console.log("1",target.isEditing)
//     } else{
//         console.log("2",target.isEditing)
//         arr.splice(index,1,{tno:tno,title:title})
//         console.log(arr)
//     }
//     setTodos(arr)
//   }

//   const deleteTodo = (tno) =>{
//     const arr = todos.slice()
//     const target = arr.filter(obj => obj.tno === tno)[0]
//     const index = arr.indexOf(target)
//     arr.splice(index,1)
//     setTodos(arr)
//   }

    // async function fetchPage(page) {
    //     try {
    //         const {data} = await axios.get("http://172.20.10.2:8080/todo/pages/" + page)
    //         console.log(data.content)
    //         const arr = data.content.map(({tno,title})=>{
    //             return{
    //                 tno: tno,
    //                 title : title
    //             }
    //         })
    //         console.log(arr)
    //         // setTodos(arr)
    //         return arr
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

  return(
    <div>
        <h1>Todo List</h1>
        {/* {props.text} */}
        <TodoInput></TodoInput>
        <TodoList></TodoList>
    </div>
  )
}

export default Todo