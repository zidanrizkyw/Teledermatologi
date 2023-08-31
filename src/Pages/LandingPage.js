import "../component/style/landingPage.css"
import Navigationbar from "../component/LandingPage/Navigationbar"
import Intro from "../component/LandingPage/Intro";



function LandingPage(){
    return (
        <div className="Applandingpage">
            <Navigationbar/>
            <Intro/>
            
        </div>

    )
}

export default LandingPage;