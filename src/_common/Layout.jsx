import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthUserContextProvider from '../auth/AuthUserContextProvider'
import FirebaseContextProvider from '../firebase/FirebaseContextProvider'
import UserBadge from './UserBadge'

const Layout = () => {
  return (
    <FirebaseContextProvider>
      <AuthUserContextProvider>
        <Link to="/">home</Link>
        <UserBadge />
        <Outlet />
        <Link to="./login">login</Link>
      </AuthUserContextProvider>
    </FirebaseContextProvider>
  )
}

export default Layout