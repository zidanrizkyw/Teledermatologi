import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import LandingPage from './Pages/LandingPage';
import LoginPage from "./Pages/LoginPage"
import RegisterPage from './Pages/RegisterPage';
import DashboardDoctor from './Pages/DashboardDoctor'
import DashboardAdmin from './Pages/DashboardAdmin';
import AddDoctor from './Pages/AddDoctor';
import DetailPatientDoc from './Pages/DetailPatientDoc';
import DetailPatientAd from './Pages/DetailPatientAd';
import ProfilePatient from './Pages/ProfilePatient';

function App(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/LoginPage' element={<LoginPage/>}/>
                <Route path='/RegisterPage' element={<RegisterPage/>}/>
                <Route path='/DashboardDoctor' element={<DashboardDoctor/>}/>
                <Route path='/DashboardAdmin' element={<DashboardAdmin/>}/>
                <Route path='/AddDoctor' element={<AddDoctor/>}/>
                <Route path='/DetailPatientDoc' element={<DetailPatientDoc/>}/>
                <Route path='/DetailPatientAd' element={<DetailPatientAd/>}/>
                <Route path='/ProfilePatient' element={<ProfilePatient/>}/>

            </Routes>
        </Router>
    )
}

export default App;