import { useState } from 'react'
import InputToDo from './Component/InputToDo'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([]);
  
  const inputHandler = (inputVal) => {
    const newTodo = {
      id: Date.now(),
      text: inputVal,
      completed: false
    };
    setTodoList([...todoList, newTodo]);
  }

  const deleteHandler = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodoList(todoList.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const completedCount = todoList.filter(todo => todo.completed).length;
  const totalCount = todoList.length;

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">✨ My Todo App</h1>
          <p className="subtitle">Stay organized and productive</p>
        </header>
        
        <InputToDo inputHandler={inputHandler}/>
        
        {totalCount > 0 && (
          <div className="stats">
            <span className="stats-text">
              {completedCount} of {totalCount} tasks completed
            </span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{width: `${(completedCount / totalCount) * 100}%`}}
              ></div>
            </div>
          </div>
        )}

        <div className="todo-list">
          {todoList.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">📝</span>
              <p>No tasks yet. Add one above!</p>
            </div>
          ) : (
            todoList.map((todo) => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-content">
                  <input 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="checkbox"
                  />
                  <span className="todo-text">{todo.text}</span>
                </div>
                <button 
                  onClick={() => deleteHandler(todo.id)}
                  className="delete-btn"
                  title="Delete task"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
