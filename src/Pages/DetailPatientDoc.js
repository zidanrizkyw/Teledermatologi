import React from 'react'
import '../component/style/DashboardDoctor.css'
import NavbarDetailPatient from '../component/DetailPatientDoc/NavbarDetailPatient'
import Sidebar from '../component/DashboardDoctor/Sidebar'
import ContentDetailPatientDoc from '../component/DetailPatientDoc/ContentDetailPatientDoc'

function DetailPatientDoc() {
    return (
        <div className='AppDashDoctor'>
            <Sidebar />
            <div className='RightWrapper'>
                <NavbarDetailPatient />
                <ContentDetailPatientDoc />
            </div>
        </div>
    )
}

export default DetailPatientDoc