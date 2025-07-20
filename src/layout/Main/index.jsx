import React from 'react'
import Navbar from '../Navbar'

const MainLayout = (props) => {
  return (
    <div>
        <Navbar></Navbar>
        <div>{props.children}</div>
    </div>
  )
}

export default MainLayout