import React from 'react'

import Addtask from '../components/addtask'
import Tasktab from '../components/tasktab'
import Tasks from '../components/task'


const page = () => {

  return (
    <div>

    <p>hello</p>

    <div className="mx-auto max-w-4xl px-6 p-6">
        <Addtask/>
        
       {/* <div className="mt-6 flex gap-0.5">
            <Tasktab name="All"/>
            <Tasktab name="Active"/>
            <Tasktab name="Completed"/>
        </div>

       */}

    
    </div>



    </div>
  )
}

export default page
