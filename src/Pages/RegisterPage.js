import "../component/style/LoginPage.css"
import Navigationbar from "../component/LandingPage/Navigationbar";
import LeftRegist from "../component/RegisterPage/LeftRegist";
import RightRegist from "../component/RegisterPage/RightRegist";

function RegisterPage(){
    return (
        <div>
            <Navigationbar/>
            <div className="WrapperLogin">
                <LeftRegist/>
                <RightRegist/>
            </div>
        </div>
    )

}

export default RegisterPage