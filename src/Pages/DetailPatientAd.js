import React from 'react'
import '../component/style/DashboardDoctor.css'
import NavbarDetailPatient from '../component/DetailPatientDoc/NavbarDetailPatient'
import ContentDetailPatientAd from '../component/DetailPatientAdmin/ContentDetailPatientAd'
import SidebarDashAdmin from '../component/DashboardAdmin/SidebarDashAdmin'

function DetailPatientAd() {
    return (
        <div className='AppDashDoctor'>
            <SidebarDashAdmin />
            <div className='RightWrapper'>
                <NavbarDetailPatient />
                <ContentDetailPatientAd />
            </div>
        </div>
    )
}

export default DetailPatientAd