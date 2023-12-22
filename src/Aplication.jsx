import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
export default function Aplication(){
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm/>
      <TaskList/>
      </div>
    </main>
  )
}
