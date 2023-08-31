import React from 'react'
import SidebarDashAdmin from '../component/DashboardAdmin/SidebarDashAdmin'
import Navbar from '../component/DashboardDoctor/Navbar'
import '../component/style/DashboardDoctor.css'
import ContentDashAdmin from '../component/DashboardAdmin/ContentDashAdmin'
import { Navigate } from 'react-router-dom'

function DashboardAdmin() {
    const token = localStorage.getItem('token')

    if(!token) {
        return <Navigate to="/LoginPage"/>
    }

    return (
        <div className='AppDashDoctor'>
            <SidebarDashAdmin />
            <div className='RightWrapper'>
                <Navbar />
                <ContentDashAdmin />
            </div>
        </div>
    )
}

export default DashboardAdmin