import "../component/style/LoginPage.css"
import Navigationbar from "../component/LandingPage/Navigationbar";
import Left from "../component/LoginPage/Left";
import Right from "../component/LoginPage/Right";

function LoginPage(){
    return (
        <div>
            <Navigationbar/>
            <div className="WrapperLogin">
                <Left/>
                <Right/>
            </div>
        </div>
    )

}

export default LoginPage