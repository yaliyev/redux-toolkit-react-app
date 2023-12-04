import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const UserRoot = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default UserRoot