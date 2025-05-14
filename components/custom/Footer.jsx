"use client";
import { HelpCircle, LogOut, Settings, Wallet } from 'lucide-react'
import React from 'react'
import Button from '../Button'
import { useRouter } from 'next/navigation'

const Footer = () => {
    const router = useRouter();
    const options = [
        {
            name: 'Settings',
            icon:Settings
        },
        {
            name: 'Help Center',
            icon:HelpCircle
        },
        {
            name: 'Subscription',
            icon:Wallet,
            path:'/pricing'
        },
        {
            name: 'Sign Out',
            icon:LogOut
        }
    ]

    const onOptionClick=(option)=>{
        router.push(option.path);

    }
  return (
    <div className='flex flex-col gap-5 justify-start'>
        {options.map((option,index)=>(
<Button key={index} onClick={()=>onOptionClick(option)} className='bg-gray-700 opacity-50 items-center justify-start text-xs flex gap-1'><option.icon size={20}/>{option.name}</Button>
        ))}
        
    </div>
  )
}

export default Footer