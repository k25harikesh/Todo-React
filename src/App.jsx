import './App.css'


export default function app(){
  return (
    <>
      <nav>
        <h1>XERO<span style={{color: 'tomato'}}>Todo</span></h1>      
      </nav>
      <main className='todo-container'>

        <div className='header-card'>
          <div className="header-info">
            <h1>Todo Done</h1>
            <p>Keep it up</p>
          </div>
          <div className="progress-circle">
            <span>1 / 3</span>
          </div>
        </div>

        <form className='input-row'>
          <input type="text" name='task-input' placeholder='Write Next Task' className='task-input'/>
          <button type='submit' name='add-btn' className='add-btn'>+</button>
        </form>

        <div className="task-list">
          {/* Active Task */}
          <div className="task-item">
            <div className="task-left">
              <span className="circle-icon alert"></span>
              <span className="task-text">Task 1</span>
            </div>
            <div className="task-actions">
              <button className="action-btn">🖊️</button>
              <button className="action-btn">🍴</button>
            </div>
          </div>
          {/* completed task */}
          <div className="task-item completed">
            <div className="task-left">
              <span className="circle-icon success"></span>
              <span className="task-text">Task 2</span>
            </div>
            <div className="task-actions">
              <button className="action-btn">🖊️</button>
              <button className="action-btn">🍴</button>
            </div>
          </div>          
        </div>

      </main>
    </>
  )
}