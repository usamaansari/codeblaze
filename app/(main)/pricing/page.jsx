"use client"
import PricingModel from '@/components/custom/PricingModel'
import { UserDetailContext } from '@/context/UserDetailContext'
import Colors from '@/data/Colors'
import Lookup from '@/data/Lookup'
import React, { useContext } from 'react'

const Pricing = () => {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
  return (
    <div className='mt-10 flex flex-col items-center p-2 lg:px-30'>
        <h2 className='font-bold text-5xl'>Pricing</h2>
        <p className='text-gray-400 max-w-xl text-center my-4'>{Lookup.PRICING_DESC}</p>
<div className='p-5 border rounded-xl border-amber-400 w-full flex justify-between items-center' style={{backgroundColor:Colors.CHAT_BACKGROUND}}>
    <h2><span className='font-bold'>{userDetail?.token}</span> Token Left</h2>
    <div>
        <h2 className='font-medium'>Need more token?</h2>
        <p>Upgrade your plan below</p>
    </div>
</div>
<PricingModel />
    </div>
  )
}

export default Pricing