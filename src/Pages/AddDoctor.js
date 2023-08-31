import React from 'react'
import SidebarDashAdmin from '../component/DashboardAdmin/SidebarDashAdmin'
import '../component/style/DashboardDoctor.css'
import ContentAddDoctor from '../component/AddDoctor/ContentAddDoctor'
import NavbarAddDoctor from '../component/AddDoctor/NavbarAddDoctor'

function AddDoctor() {
    return (
        <div className='AppDashDoctor'>
            <SidebarDashAdmin />
            <div className='RightWrapper'>
                <NavbarAddDoctor />
                <ContentAddDoctor />
            </div>
        </div>
    )
}

export default AddDoctor