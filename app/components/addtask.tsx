'use client';

import React from 'react'
import {useState} from 'react'



const addtask = () => {

    const [taskInput, setTaskInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){

        //prevent page refresh
        e.preventDefault()

        console.log("submitted")

        //send to database



        //clear out input field 
        setTaskInput("");
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



    </div>
  )
}

export default addtask
