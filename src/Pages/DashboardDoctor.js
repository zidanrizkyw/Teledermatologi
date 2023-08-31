import React from 'react'
import Sidebar from '../component/DashboardDoctor/Sidebar'
import Content from '../component/DashboardDoctor/Content'
import Navbar from '../component/DashboardDoctor/Navbar'
import '../component/style/DashboardDoctor.css'
import { Navigate } from 'react-router-dom'




function DashboardDoctor() {
    const token = localStorage.getItem('token')

    if(!token) {
        return <Navigate to="/LoginPage"/>
    }

    return (
        <div className='AppDashDoctor'>
            <Sidebar />
            <div className='RightWrapper'>
                <Navbar />
                <Content />
            </div>
        </div>
    )
}
export default DashboardDoctor