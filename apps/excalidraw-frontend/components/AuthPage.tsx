import React from 'react'

const AuthPage = ({isSignin}:{
    isSignin:boolean
}) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='p-2 m-2 bg-white rounded border-2'>
            <div>
            <input type="text" placeholder='Email' className='p-2'></input>
            </div>
            <div>
            <input type="password" placeholder='Password'className='p-2'></input>
            </div>
            <button className='bg-black text-white w-full mt-2'>{isSignin ? "Sign in":"sign up"}</button>
        </div>
    </div>
  )
}

export default AuthPage