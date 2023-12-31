import { useContext, useState } from "react"
import { TaksContext } from "../context/TaskContext"
export default function TaskForm() {
    const[title,setTitle] = useState('')
    const[description,setDescription] = useState('')
    const {createTaks} = useContext(TaksContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        createTaks({
          title,
          description
        })
        setTitle('')
        setDescription('')
    }
  return (
    <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
              <h1 className="text-2x1 font-bold text-white mb-3">Crea tu tarea</h1>
            <input type="text" placeholder="escribe tu tarea" onChange={e=>setTitle(e.target.value)} value={title} autoFocus className="bg-slate-300 p-3 w-full mb-2"/>
            <textarea value={description} name="" id="" cols="30" rows="10" placeholder="escribe la descripcion de la tarea" onChange={e=>setDescription(e.target.value)} className="bg-slate-300 p-3 w-full mb-2"></textarea>
            <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
        </form>
    </div>
  )
}
