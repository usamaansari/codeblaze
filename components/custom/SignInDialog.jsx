import React, { useContext } from 'react';
import Dialog from '../Dialog';
import Lookup from '@/data/Lookup';
import Button from '../Button';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { UserDetailContext } from '@/context/UserDetailContext';

const SignInDialog = ({openDialog1}) => {
    const {userDetail, setUserDetail} = useContext(UserDetailContext);

const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer '+tokenResponse.access_token } },
      );
  
      console.log(userInfo);
      setUserDetail(userInfo?.data)
      if(typeof window!==undefined)
      {
        localStorage.setItem('user', JSON.stringify(userInfo?.data))
      }
      const response = await axios.post("/api/user", {name:userInfo?.data.name, email:userInfo?.data.email, picture:userInfo?.data.picture, token:50000});
        console.log(response);
      openDialog1=false
    },
    onError: errorResponse => console.log(errorResponse),
  });

    return (
        <div className="p-8">
      <Dialog triggerText="Launch Modal" openDialog2={openDialog1}>
        <div className='flex flex-col items-center justify-center gap-3'>
        <h2 className="text-2xl text-center font-bold mb-2">{Lookup.SIGNIN_HEADING}</h2>
        <p className='mt-2 text-center'>{Lookup.SIGNIN_SUBHEADING}</p>
        <Button className='bg-blue-500 text-white hover:bg-blue-800' onClick={googleLogin}>Sign in with Google</Button>
        <p>{Lookup.SIGNIn_AGREEMENT_TEXT}</p>
        </div>
      </Dialog>
    </div>
    );
};

export default SignInDialog;