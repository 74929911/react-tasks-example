import { useContext } from "react"
import { TaksContext } from "../context/TaskContext"
export default function TaskCard({task}) {
  const {deleteTask}=useContext(TaksContext)
  return (
      <div key={task.id} className="bg-gray-800 text-white p-4 rounded-md">
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <p className="text-gray-500 text-sm">{task.description}</p>
        <button onClick={()=>deleteTask(task.id)} className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400">Eliminar tarea</button>
    </div>
  )
}
