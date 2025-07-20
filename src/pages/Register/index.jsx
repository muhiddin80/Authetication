import React from 'react'
import { NavLink } from 'react-router'

const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center pt-30'>
      <form action="" className='flex flex-col gap-1 w-[400px] rounded-2xl p-6 shadow-2xl'>
        <h1 className='text-3xl font-semibold text-center'>Register</h1>

        <label htmlFor="name">Name:</label>
        <input className='border rounded p-1 mb-3' type="text" name="name" id="name" placeholder='name...' />

        <label htmlFor="email">Email:</label>
        <input className='border rounded p-1 mb-3' type="email" name="email" id="email" placeholder='email...' />

        <label htmlFor="password">Password:</label>
        <input className='border rounded p-1 mb-4' type="password" name='password' id='password' placeholder='password...' />

        <button className='bg-blue-800 p-1 rounded text-white' type='submit'>Register</button>
        <p>Have account? <NavLink className='text-blue-600' to='/login'>Login!</NavLink></p>
      </form>
    </div>
  )
}

export default RegisterPage
