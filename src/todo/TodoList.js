import React from 'react'
import useInput from './UseInput'
import {connect} from 'react-redux'
import { checkTodo, deleteTodo, editTodo } from '../actions'

function TodoList (props) {
    const {text,dispatch} = props
    console.log(props)
    console.log(text)
    const tempTitle = useInput('')

    const clickEditBtn = (tno, title)=>{
        dispatch(editTodo(tno, title))
        tempTitle.setValue(title)
    }

    const list = text.map(
        ({tno,title,complete,isEditing})=>{
            const style = complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}
            if(isEditing){
                console.log("isEditing",isEditing)
            return(
                
                <div className="todo-item" key = {tno} style={style} list-style={''}>
                <input type='checkbox' onChange={()=>
                    dispatch(checkTodo(tno))} checked={complete}/>
                {/* {title}  */}
                <input type='text' value={tempTitle.value} onChange={(e)=>{tempTitle.setValue(e.target.value)}}></input>

                <button onClick={()=>
                    dispatch(editTodo(tno,tempTitle.value))}>save</button>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation()
                    dispatch(deleteTodo(tno))
                }
                    
                    }>
                    &times;

                </div>
                </div>
            )
        }

        return(
                <div className="todo-item" key = {tno} style={style} list-style={''}>
                <input type='checkbox' onChange={()=>
                    dispatch(checkTodo(tno))} checked={complete}/>
                {title} 
                {/* <button onClick={()=>update(tno)}>update</button> */}
                <button onClick={()=>clickEditBtn(tno, title)}>edit</button>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation()
                    dispatch(deleteTodo(tno))
                }
                    
                    }>
                    &times;

                </div>
                </div>
            )
        })
    return(
        <div>
            {/* <h3>TodoList</h3> */}
            <ul>
            {list}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    const text = state.text
    
    return {text:text}
  }
  
  export default connect(mapStateToProps)(TodoList)