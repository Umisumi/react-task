// import { useState, useEffect } from "react";
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <main className='bg-zinc-900 h-screen p-10'>
      <div className='container mx-auto'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

/* function App() { 
  # Antes del Context
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
} */

export default App