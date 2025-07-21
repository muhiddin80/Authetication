import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { LoginApiFn } from '../../utils/auth.fake'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'

const LoginPage = () => {
  const navigate = useNavigate()

  const {login} = useAuth()

  const [loading,setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await LoginApiFn({
        email:e.target.email.value,
        password:e.target.password.value
      })
      if(!!res.token){
        setLoading(false)
        login(res.data,res.token)
        navigate('/')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  } 
  return (
    <div className='flex justify-center items-center pt-30' >
        <form action="" className='flex flex-col gap-1 w-[400px]  rounded-2xl p-6 shadow-2xl' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-semibold text-center'>Login</h1>

            <label className=''  htmlFor="email">Email:</label>
            <input className='border rounded p-1 mb-3'  type="email" name="email" id="email" placeholder='email...' />

            <label className='' htmlFor="password">Password:</label>
            <input className='border rounded p-1 mb-4' type="password" name='password' id='password' placeholder='password...' />

            <button className='bg-blue-800 p-1 rounded text-white'type='submit' disabled={loading}>{loading ? 'Loading...':'Login'}</button>
            <p>Don't have account? <NavLink className='text-blue-600' to='/register'>Register!</NavLink></p>
        </form>
    </div>
  )
}

export default LoginPage