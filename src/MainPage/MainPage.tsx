import React from 'react'
import SideNav from '../Component/SideNav/SideNav'
import Dashboard from '../Component/Dashboard/Dashboard'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
    return (
        <div className='row container-fluid pe-0'>
            <div className="col-2 pe-0">
                <SideNav />
            </div>
            <div className="col p-0">
                <Outlet />
                {/* <Dashboard /> */}
            </div>
        </div>
    )
}

export default MainPage
