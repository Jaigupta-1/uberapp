import React from 'react'
import {Link} from 'react-router-dom'
const image ='https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const Home = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
      <div className='w-full h-[80%] bg-red-500' >
          <img className='absolute h-9 w-24 inset-5' src="/logo.png" />

          <img className='h-full w-full object-cover' src={image} alt="loading" />
      </div>
      <div className='px-4 py-2 h-full grid grid-cols-1'>
          <p className='text-2xl font-medium '>Get Started</p>
          <Link to = 'api/user/login' className='bg-black w-full h-14 text-white rounded flex items-center justify-center font-medium text-xl'>Continue</Link>
      </div>
    </div>
  )
}

export default Home