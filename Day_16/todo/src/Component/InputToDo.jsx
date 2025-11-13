import React, { useState } from 'react'

const InputToDo = ({inputHandler}) => {

    const [inputValue, setInputValue] = useState("");
    const addTask = () => {
        if(inputValue === "") return;
        inputHandler(inputValue);
        setInputValue("");
    }
  return (
    <div className='input-todo'>
        <input type="text" name='input-todo' id='input-todo' 
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>ADD</button>
    </div>
  )
}

export default InputToDo