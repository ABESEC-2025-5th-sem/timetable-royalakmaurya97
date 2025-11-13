import React, { useState } from 'react'

const InputToDo = ({inputHandler}) => {
    const [inputValue, setInputValue] = useState("");
    
    const addTask = () => {
        const trimmedValue = inputValue.trim();
        if(trimmedValue === "") return;
        inputHandler(trimmedValue);
        setInputValue("");
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div className='input-section'>
            <div className='input-container'>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a new task..."
                    className='todo-input'
                    maxLength={100}
                />
                <button 
                    onClick={addTask} 
                    className='add-btn'
                    disabled={!inputValue.trim()}
                >
                    <span className='add-icon'>+</span>
                    Add
                </button>
            </div>
        </div>
    )
}

export default InputToDo