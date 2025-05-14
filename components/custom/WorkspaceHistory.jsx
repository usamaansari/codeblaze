"use client"

import { UserDetailContext } from '@/context/UserDetailContext'
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

const WorkspaceHistory = () => {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    const [workspaceList, setWorkspaceList] = useState();
    useEffect(()=>{
userDetail&&GetAllWorkspace();
    },[userDetail])
const GetAllWorkspace = async()=>{
    const result = await axios.get(`/api/filespace?user=${userDetail._id}`);
    console.log(result?.data?.workspaces);
    setWorkspaceList(result?.data?.workspaces);
}
  return (
    <div>
        <h2 className='text-lg font-medium'>Your Chats</h2>
        <div>
            {workspaceList&&workspaceList?.map((workspace,index)=>(
                <Link href={'/workspace/'+workspace?._id} key={index}>
                <h2  className='text-sm text-gray-400 mt-2 font-light cursor-pointer hover:text-white'>{workspace?.messages[0]?.content}</h2>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default WorkspaceHistory