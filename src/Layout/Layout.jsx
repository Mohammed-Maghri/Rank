import React, { useEffect , useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { HeaderNav } from '../Nav/Nav'
const Layout = () => {  
  return (
    <div className='flex-row h-[100vh] items-center justify-center overflow-hidden'>
        <HeaderNav />
        <Outlet/>
    </div>
  )
}

export default Layout