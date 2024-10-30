import LoginForm from '@/components/LoginForm'
import Image from 'next/image'
import React from 'react'

function Page() {

  return (
    <div className='flex justify-center h-screen items-center'>
      <div className="w-[20vw] mr-40">
        <h1 className='font-bold text-4xl mb-20'>Iniciar Sesión</h1>
        <LoginForm/>
      </div>
      <Image 
        src={'/images/amico.png'} alt={''} 
        className='w-[45rem]' 
        width={2000}        
        height={2000}       
        layout="intrinsic" 
      />
    </div>
  )
}

export default Page