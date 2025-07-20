import React from 'react'
import { Navigate } from 'react-router'
import { auth } from '../utils/auth.fake'

const PrivateRoute = ({children}) => {
  return auth.isAuthenticated ? children : <Navigate to='login'/>
}

export default PrivateRoute