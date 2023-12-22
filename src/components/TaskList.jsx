import { useContext } from "react"
import TaskCard from "./TaskCard"
import { TaksContext } from "../context/TaskContext"
export default function TaskList() {
    const {task} = useContext(TaksContext)
    if (task.length == 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tarea aun</h1>
    }
    return (
        <div className="grid grid-cols-4 gap-2">
            {task.map(task =>
            <TaskCard key={task.id} task ={task}/>
        )
        }
        </div>
    )
}
