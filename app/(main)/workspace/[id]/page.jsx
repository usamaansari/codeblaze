import ChatView from '@/components/custom/ChatView'
import CodeView from '@/components/custom/CodeView'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Workspace = () => {
  return (
    <div className='p-5 flex flex-row gap-2'>
      <Sidebar />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <ChatView/>
            <div className='col-span-2'>
                 <CodeView />
            </div>
           
        </div>
    </div>
  )
}

export default Workspace