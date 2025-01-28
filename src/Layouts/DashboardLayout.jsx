import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from '../Component/SideBar/SideBar.jsx'
import Topbar from '../Component/TopBar/TopBAR.JSX';

import './layout.css'

const DashboardLayout = () => {
  return (
    <div style={{position:'relative'}}>
        <SideBar /> 
        <Topbar />
        <div className='dashboard-outlet'>
          <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout