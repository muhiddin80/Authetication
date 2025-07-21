import React from 'react'
import { NavLink } from 'react-router' 
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
  const {logout} = useAuth()
  return (
    <nav className='w-full bg-blue-800 text-white shadow-md'>
      <div className='max-w-6xl mx-auto px-4 h-14 flex items-center justify-between'>
        <div className='text-lg font-semibold'>
          <NavLink to="/" className="hover:text-gray-300 transition">MyApp</NavLink>
        </div>
        <div className='space-x-4'>
          <NavLink to="/" className="hover:text-gray-300 transition">Home</NavLink>
          <NavLink to="/login" className="hover:text-gray-300 transition">Login</NavLink>
          <NavLink to="/register" className="hover:text-gray-300 transition">Register</NavLink>
          <button onClick={()=>logout()} className='cursor-pointer'>Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
