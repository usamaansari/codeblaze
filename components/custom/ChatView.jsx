"use client"
import { MessagesContext } from '@/context/MessagesContext';
import { UserDetailContext } from '@/context/UserDetailContext';
import Colors from '@/data/Colors';
import Lookup from '@/data/Lookup';
import axios from 'axios';
import { Link, Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button';
import Prompt from '@/data/Prompt';
import Markdown from 'react-markdown';


export const countToken = (inputText)=>{
    return inputText.trim().split(/\s+/).filter(word=>word).length;
}

const ChatView = () => {
    const {id} = useParams();
    const {messages, setMessages} = useContext(MessagesContext);
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    const [userInput, setUserInput] = useState();
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
     id&&GetWorkspaceData();
    },[id])
    const GetWorkspaceData = async()=>{
        const result = await axios.get(`/api/workspace?id=${id}`);
        console.log(result?.data?.workspaces[0]);
        setMessages(result?.data?.workspaces[0].messages)
    }
    useEffect(()=>{
if(messages?.length>0)
{
    const role=messages[messages?.length-1].role;
    if(role=='user'){
      GetAiResponse()
    }
   
}
    },[messages])
    const GetAiResponse=async()=>{
        setLoading(true);
        const PROMPT=JSON.stringify(messages)+Prompt.CHAT_PROMPT;
        const response = await axios.post("/api/ai-chat", {prompt:PROMPT});
        console.log(response);
        const aiResp={
            role:'ai',
            content: response.data.result
        };
        setMessages(prev=>[...prev,aiResp])
        //const token = Number(userDetail?.token) - Number(countToken(JSON.stringify(aiResp)))
        const responseUpdate = await axios.patch("/api/workspace", { id, messages:[...messages,aiResp] });
  console.log("Updated Messages:", responseUpdate.data);

  //const updateToken = await axios.patch("/api/user", { userId: userDetail?._id, token:token });
  //setUserDetail(prev=>({...prev, token:token}));
        setLoading(false);

    }
    const onGenerate=(input)=> {
        setMessages(prev=>[...prev,{
            role:'user',
            content:input
        }])
        setUserInput('');
    }
  return (
    <div className='relative h-[85vh] flex flex-col'>ChatView
        <div className='flex-1 overflow-y-scroll'>
            
            {Array.isArray(messages) && messages?.map((msg,index)=>(
                <div key={index} className='p-3 rounded-lg mb-2 flex items-center gap-3' style={{backgroundColor:Colors.CHAT_BACKGROUND}}>
                    {msg?.role=='user'&&(userDetail&&<Image src={userDetail?.picture} alt="userImage" width={35} height={35} className='rounded-full' />)}
                    <div className="flex flex-col">
                    <Markdown>{msg.content}</Markdown>
                    </div>
                    
                    </div>
            ))}
            { loading &&
                    <div className='p-3 rounded-lg mb-2 flex items-center gap-3' style={{backgroundColor:Colors.CHAT_BACKGROUND}} ><Loader2Icon className='animate-spin'/><h2>Generating Response</h2></div>
                }
        </div>
        <div className='flex flex-col gap-5'>
            <textarea placeholder={Lookup.INPUT_PLACEHOLDER} value={userInput} onChange={(event)=>setUserInput(event.target.value)} rows={10} cols={50} className='border rounded-lg'/>
            <Link />
            <Button onClick={()=>onGenerate(userInput)}>
              Chat with app
            </Button>
        </div>
    </div>
  )
}

export default ChatView