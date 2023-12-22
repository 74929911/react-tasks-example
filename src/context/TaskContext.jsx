import React, { createContext, useEffect, useState } from 'react'
import { tasks as data } from '../data/tasks'
export const TaksContext = createContext()
export default function TaskContextProvider(props) {
    const [task, setTasks] = useState([])
    function createTaks(taskValue){
        setTasks([...task,{
          title:taskValue.title,
          id : task.length,
          description : taskValue.description
        }])
      }
      const deleteTask=(taskID)=>{
        setTasks(task.filter(task=>task.id !== taskID))
      }
      useEffect(() => {
        setTasks(data)
    }, [])
  return (
    <TaksContext.Provider value={{
        task,
        deleteTask,
        createTaks

    }}>
        {props.children}
    </TaksContext.Provider>
  )
}
