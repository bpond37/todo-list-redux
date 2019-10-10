import React, {useState} from 'react'
import { tsPropertySignature } from '@babel/types'

export default function TodoInput (props) {
    // const addTodo = props.add
    
    // console.log(props.add)
    
    // const [title, setTitle] = useState('')
    // const changeText= (e) =>{
    //     console.log(e.target.value)
    //     setTitle(e.target.value)
    //     // console.log(title)
    // };

    function useInput(defaultValue){
        const [value, setValue]= useState(defaultValue);

        const onChange = (e) =>{
            const {target : {value}}= e;
            setValue(value)
        }
        return {value, onChange}
    }
    const title2 = useInput("")
    console.log(title2.value)
    const sendData = () =>{
        
        console.log(title2.value)
        props.add(title2.value)
        
        // addTodo(title2)
    }


    return(
        
        <div>
            <h1>TodoInput</h1>
            {/* <input type='text' value={title} onChange={(e)=>changeText(e)}></input> */}
            <input {...title2}></input>
            <button onClick={()=>sendData()}>+</button>
        </div>
    )
}