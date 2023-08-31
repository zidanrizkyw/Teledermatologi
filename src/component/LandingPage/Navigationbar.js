import lambangkesehatan from "../../assets/images/lambangkesehatan.png"
import { Navbar, Container, Nav, NavbarBrand, Row, Col } from "react-bootstrap";



function Navigationbar() {
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">
                        <Col>
                            <img src={lambangkesehatan}
                                width="70"
                                height="70"
                            />{' '}
                            Telemedicine
                        </Col>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/LoginPage">Login</Nav.Link>
                        <Nav.Link href="/RegisterPage">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigationbar;