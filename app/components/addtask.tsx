'use client';

import React from 'react'
import {useEffect, useState} from 'react'
import {prisma} from '@/lib/prisma'

import FadeIn from "../animations/fadein"
import Image from 'next/image';
import trashIcon from "../assets/trash.png";
import { Task } from '@prisma/client';




const addtask = () => {

    const [taskInput, setTaskInput] = useState("");
    const[tasks, setTasks] = useState<Task[]>([]);
    const[reloadFlag, setReloadFlag] = useState(0);


    // grabs tasks from db 
    useEffect(() =>{
        async function loadTasks(){
            const res = await fetch("api/tasks"); // GET by default 
            const data = await res.json();
            setTasks(data);
        }
        loadTasks();
    },[reloadFlag]);

    // handles submit + send POST request to DB
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        //prevent page refresh
        e.preventDefault()
        
        await fetch("/api/tasks",{
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({title: taskInput}),
        });
        
        console.log("submitted")


        //clear out input field 
        setTaskInput("");
        setReloadFlag(reloadFlag + 1);
    }

    //handles completed task
    async function handleCompleted(task: Task){
        console.log(task.title, task.id) // debug 

        await fetch(`/api/tasks/${task.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({completed: !task.completed}),
        });

        //refetch tasks to update
        setReloadFlag(reloadFlag + 1);
}

    async function handleResetButton(){
        console.log("handling reset")

        // send DELETE request
        await fetch("/api/tasks",{
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            
        })

        //reload tasks
        setReloadFlag(reloadFlag + 1)

    }


  return (
    <div>
      
        <form onSubmit={handleSubmit} className="p-5 mb-2 border border-[#30363d] bg-[#1d2226] rounded-md flex items-center gap-2 ">
            <input
                className="flex-1 px-2 py-1 rounded bg-[#242a2e]"
                type="text"
                placeholder="add a new task foo"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />

            <button
                className="border border-gray-400 p-2 rounded bg-white text-black"
                type="submit"
            >+
            </button>

        </form>


        <div className="flex gap-3">

            <button 
            className ="border border-gray-400 rounded-md p-4 w-fit text-slate-500 bg-amber-50 hover:bg-blue-100 ">
                All</button>
            
            <button 
            className="border border-gray-400 rounded-md p-4 w-fit text-black bg-red-300 hover:bg-red-200 cursor-pointer"
            onClick={handleResetButton}>
                Remove Completed
            </button>
        </div>


         <div className="">

        
            <ul>
                
                {tasks.map((t) => 


             //   t.completed === false ? (

                    <FadeIn key={`${t.id}-${reloadFlag}`}> {/* mounts a new key every refreshkey  */}
                        <li className={`p-6 mt-7 border border-[#363b3f] bg-[#1d2226] rounded-md flex items-center gap-2 justify-between 
                                        ${t.completed ? "line-through text-gray-500" : ""}`}
                            key={t.id}>
                            {t.title}
                        <button type="button" onClick={() => handleCompleted(t)}> {/* use arrow function because */}
                                <Image src={trashIcon} alt="delete" width={24} height={24}/>
                            </button>
                        </li>
                    </FadeIn>
           //     )
                
          //      :null
                          
            )}
            </ul>
        </div>



    </div>
  )
}

export default addtask
