import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DoctorImage from "../../assets/images/doctor.jpg"

function RightRegist() {
    return (
        <div className="WrapperRightRegist">
            <Container  className="d-flex justify-content-center align-items-center h-100 backgroundRight">
                <Row>
                    <Col>
                        <img className="doctorimage" src={DoctorImage}/>
                        <div className="captionright">Meet Your Personal Doctor</div>
                        <div className="captionright2">Help Yourself to get a better health</div>
                    </Col>
                    
                </Row>
            </Container>


        </div>
    )
}

export default RightRegist;