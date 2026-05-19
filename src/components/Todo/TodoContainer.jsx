import { useState } from 'react'
import './TodoContainer.css'


function HeaderCard({total, completed}){
  return (
      <div className='header-card'>
        <div className="header-info">
          <h1>Todo Done</h1>
          <p>Keep it up</p>
        </div>
        <div className="progress-circle">
          <span>{completed} / {total}</span>
        </div>
      </div>
  )
}

function InputRow({inputValue, setInputValue, addTask}){

  function handleSubmit(e){
    e.preventDefault()
    addTask()    
  }

  return (
      <form className='input-row' onSubmit={handleSubmit}>
        <input
         type="text" name='task-input' placeholder='Write Next Task' className='task-input'
         value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>

        <button type='submit' name='add-btn' className='add-btn'>+</button>
      </form>
  )
}

function TaskList({tasks}){
  return (
      <div className="task-list">
        {tasks.map((task, index) => {
          return (
            <div className="task-item" key={index}>
              <div className="task-left">
                <span className="circle-icon alert"></span>
                <span className="task-text">{task}</span>
              </div>
              <div className="task-actions">
                <button className="action-btn">🖊️</button>
                <button className="action-btn">🍴</button>
              </div>
            </div>
          )
          })
        }
        {/* Active Task */}
        {/* <div className="task-item">
          <div className="task-left">
            <span className="circle-icon alert"></span>
            <span className="task-text">Task 1</span>
          </div>
          <div className="task-actions">
            <button className="action-btn">🖊️</button>
            <button className="action-btn">🍴</button>
          </div>
        </div> */}
        {/* completed task */}
        {/* <div className="task-item completed">
          <div className="task-left">
            <span className="circle-icon success"></span>
            <span className="task-text">Task 2</span>
          </div>
          <div className="task-actions">
            <button className="action-btn">🖊️</button>
            <button className="action-btn">🍴</button>
          </div>
        </div>           */}
      </div>
  )
}

export default function TodoContainer(){

  const [inputValue, setInputValue] = useState("")
  const [tasks, setTasks] = useState([])

  function addTask(){
    if(inputValue.trim() === '') return
    setTasks([...tasks, inputValue])      
    setInputValue('')
  }

  const total = tasks.length
  const completed = 1


  return (
      <div className='todo-container'>
        <HeaderCard total={total} completed={completed} />
        <InputRow inputValue={inputValue} setInputValue={setInputValue} addTask={addTask} />        
        <TaskList tasks={tasks} />
      </div>
  )
}