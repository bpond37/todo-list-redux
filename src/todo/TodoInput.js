import React, {useState} from 'react'

export default function TodoInput (props) {

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
        return {value, onChange, setValue}
    }
    
    const title = useInput("")
    console.log(title.value)
    const sendData = () =>{
        
        console.log(title.value)
        props.add(title.value)
        title.setValue('')
        console.log(title)
        // addTodo(title)
    }
    
    return(
        <div>
            <h3>TodoInput</h3>
            <input type='text' value={title.value} onChange={(e)=>title.setValue(e.target.value)}></input>
            <button onClick={()=>{sendData()}}>+</button>
        </div>
    )
    
    
}

