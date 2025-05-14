"use client";

import Image from 'next/image'
import React, { useContext } from 'react'
import Button from '../Button'
import Colors from '@/data/Colors'
import { UserDetailContext } from '@/context/UserDetailContext'
import { LucideDownload, Rocket } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {
  const {userDetail, setUserDetail} = useContext(UserDetailContext);

  return (
    <div className='p-4 flex flex-row justify-between items-center'>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="logo" width={200} height={200}/>
        </Link>
        {!userDetail?.name && <div className='flex flex-row gap-5'>
            <Button>Sign In</Button>
            <Button>Get Started</Button>
        </div>}
    </div>
  )
}

export default Header