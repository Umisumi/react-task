import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const {createTask}= useContext(TaskContext);

  const handleSubmint = (e) => {
    e.preventDefault();
    // console.log(title, description)
    // console.log(newTask);
    createTask({
      title,
      description
    });
    setTitle('');
    setDescription('');
  }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmint} className='bg-zinc-700 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>Create your task</h1>
        <input placeholder="Write your task" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus className='bg-slate-300 p-3 w-full mb-2'/>

        <textarea placeholder='Write your description' onChange={(e) => setDescription(e.target.value)} value={description} className='bg-slate-300 p-3 w-full mb-2'></textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400'>Save</button>
      </form>
    </div>
  );
}

export default TaskForm;

/* function TaskForm({createTask}) {
  # Antes del Context

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmint = (e) => {
    e.preventDefault();
    // console.log(title, description)
    // console.log(newTask);
    createTask({
      title,
      description
    });
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmint}>
      <input placeholder="Write your task" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus/>

      <textarea placeholder='Write your description' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
      <button>Save</button>
    </form>
  );
} */

