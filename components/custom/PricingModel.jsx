import Lookup from '@/data/Lookup'
import React, { useContext, useState } from 'react'
import Button from '../Button'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { UserDetailContext } from '@/context/UserDetailContext'
import axios from 'axios'

const PricingModel = () => {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
const [selectedOption, setSelectedOption] = useState();
    const onPaymentSuccess=async()=>{
        const token = userDetail?.token+Number(selectedOption?.value);
        console.log(token);
  const updateToken = await axios.patch("/api/user", { userId: userDetail?._id, token:token });


    }
  return (
    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {Lookup.PRICING_OPTIONS.map((pricing,index)=>(
            <div key={index} className='border border-gray-700 rounded-xl p-7 flex flex-col gap-3'>
                <h2 className='font-bold text-2xl'>{pricing.name}</h2>
                <h2 className='font-bold text-lg text-green-600'>{pricing.tokens} Tokens</h2>
                <p className='font-medium text-gray-300'>{pricing.desc}</p>
                <h2 className='font-bold text-4xl text-center mt-6'>${pricing.price}</h2>
               {/*  <Button>Upgrade to {pricing.name}</Button>*/}
                <PayPalButtons style={{ layout: "horizontal" }} 
                disabled={!userDetail}
                onClick={()=>setSelectedOption(pricing)}
                onApprove={()=>onPaymentSuccess()}
                onCancel={()=>console.log("Payment Canceled")}
                createOrder={(data,actions)=>{
                    return actions.order.create({
                        purchase_units:[
                            {
                                amount:{
                                    value:pricing.price,
                                    currency_code:'USD'
                                }
                            }
                        ]
                    })
                }}
                />
                </div>
        ))}
        
    </div>
  )
}

export default PricingModel