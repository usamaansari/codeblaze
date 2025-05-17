"use client";
import Lookup from '@/data/Lookup'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button'
import { Link } from 'lucide-react'
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
//import { useToast } from '@/lib/toast-context';

const Hero = () => {
    const [userInput, setUserInput] = useState();
    const {messages,setMessages} = useContext(MessagesContext);
    const {userDetail, setUseDetial} = useContext(UserDetailContext);
    const [openDialog, setOpenDialog] = useState(false);
    //const toast = useToast();
    const router = useRouter()

    const onGenerate = async(input)=>{
        console.log(input)
        if(!userDetail?.name){
            setOpenDialog(true)
            console.log(openDialog)
            return;
        }
        const msg={
            role:'user',
            content:input
        }
        setMessages(msg)
        const response = await axios.post("/api/workspace", {user:userDetail._id, messages:[msg]});
        console.log(response);
        
        router.push('/workspace/'+response.data.newWorkspace._id)
    }
  return (
    <div className='flex flex-col items-center mt-10 xl:mt-20 gap-2'>
        <div className='mb-5'>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white-900 leading-tight text-center">
  CodeBlaze is an <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI-Powered</span> web app<br />
  that turns your <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent font-semibold">text prompts</span> into
  <span className="bg-gradient-to-r from-teal-400 via-green-500 to-emerald-500 bg-clip-text text-transparent font-semibold"> web app code</span>
</h1>
        </div>
        <h1 className='font-bold text-4xl'>{Lookup.HERO_HEADING}</h1>
        <p className='text-gray-400 font-medium'>{Lookup.HERO_DESC}</p>
       

  
        <div className='flex flex-col gap-5'>
            <textarea placeholder={Lookup.INPUT_PLACEHOLDER} onChange={(event)=>setUserInput(event.target.value)} rows={10} cols={50} className='border rounded-lg'/>
            <Button onClick={()=>onGenerate(userInput)}>
                Create App
            </Button>
        </div>
<div className='flex flex-wrap mt-8 max-w-4xl justify-center gap-5'>
    {Lookup.SUGGSTIONS.map((item, index)=>(
        <h1 key={index} onClick={()=>onGenerate(item)} className='p-1 px-2 border rounded-full text-gray-400 hover:text-white cursor-pointer'>{item}</h1>
    ))}
     
</div>
        
    </div>
  )
}

export default Hero