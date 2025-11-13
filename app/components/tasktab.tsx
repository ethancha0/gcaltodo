type TasktabProps = {
    name: string;
}


import React from 'react'

const tasktab = ({name}:TasktabProps) => {
  return (
    <div className="">
       <div className="border border-gray-400 rounded-md p-4 w-fit text-slate-500 bg-amber-50 ">
            <p className =" ">{name}</p>
        </div> 
      
    </div>
  )
}

export default tasktab
