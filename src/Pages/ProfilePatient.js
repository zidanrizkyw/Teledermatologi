import React from 'react'
import Sidebar from '../component/DashboardDoctor/Sidebar'
import Navbar from '../component/DashboardDoctor/Navbar'
import '../component/style/DashboardDoctor.css'
import ContentProfilePatient from '../component/ProfilePatient/ContentProfilePatient'
import { Navigate } from 'react-router-dom'



function ProfilePatient() {
    const token = localStorage.getItem('token')

    if(!token) {
        return <Navigate to="/LoginPage"/>
    }
    return (
        <div className='AppDashDoctor'>
            <Sidebar />
            <div className='RightWrapper'>
                <Navbar />
                <ContentProfilePatient />
            </div>
        </div>
    )
}
export default ProfilePatient