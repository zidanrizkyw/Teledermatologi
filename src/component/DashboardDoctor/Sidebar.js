import React, { useState } from 'react'
import { Container, Row, Col, NavbarBrand, Nav } from "react-bootstrap";
import lambangkesehatan from "../../assets/images/lambangkesehatan.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';




function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{ width: isOpen ? "300px" : "70px" }} className='WrapperSidebar'>
            <Container className='bg-light h-100 w-100 rounded-4 d-flex justify-content-center mt-3'>
                <Row>
                    <Col className='mt-5'>
                        <div className="lambangkesehatanimg">
                            <img style={{ display: isOpen ? "block" : "none" }} src={lambangkesehatan}
                                width="110"
                                height="110"
                            />{' '}
                            <div style={{ marginLeft: isOpen ? "300" : "0px" }} >
                                <FontAwesomeIcon onClick={toggle} className="iconawesome1" icon={faBars} size='2x' />
                            </div>
                        </div>
                        <hr></hr>
                        <Nav.Link className='btnsidebar' href='/DashboardDoctor'>
                            <FontAwesomeIcon className="iconawesome2" icon={faHouse} size='2x' />
                            <h5 style={{ display: isOpen ? "block" : "none" }} >Dashboard</h5>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
export default Sidebar 