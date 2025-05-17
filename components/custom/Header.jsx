"use client";

import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Button from '../Button'
import Colors from '@/data/Colors'
import { UserDetailContext } from '@/context/UserDetailContext'
import { LucideDownload, Rocket } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import SignInDialog from './SignInDialog';
import { googleLogout } from '@react-oauth/google';

const Header = () => {
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
 const [openDialog, setOpenDialog] = useState(false);
 const router = useRouter();

 const userLogout=()=>{
googleLogout();
setUserDetail("");
localStorage.setItem("user", "");
router.push('/')
 }
  return (
    <div className='p-4 flex flex-row justify-between items-center'>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="logo" width={250} height={250}/>
        </Link>
        {userDetail?.name ? <div className='flex gap-3'><Image src={userDetail?.picture} alt="logo" width={50} height={50} className='rounded-full'/> <Button onClick={()=>userLogout()}>Logout</Button> </div>:<div className='flex flex-row gap-5'>
           <SignInDialog openDialog1={openDialog} />
        </div>}
    </div>
  )
}

export default Header