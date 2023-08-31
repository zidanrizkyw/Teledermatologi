import { Col, Container, Row, Button} from "react-bootstrap"
import DuaDoctorImage from "../../assets/images/duadoctor.png"

function Intro(){
  return (
    <div className="intro">
      <Container className="text-white">
        <Row>
          <Col lg={6} className="wrapper1">
            <div className="title">CHECK UP</div>
            <div className="title">CANCER FROM</div>
            <div className="title">SKIN NOW !</div>
            <div className="title1">We Provide a Professional Doctor</div>
            <Button href="/LoginPage" className="tombol border border-dark shadow rounded" variant="primary outline-dark">GO NOW</Button>
          </Col>
          <Col lg={6}>
            <img className="Duadoctor" src={DuaDoctorImage}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro;