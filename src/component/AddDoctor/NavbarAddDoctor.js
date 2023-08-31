import React from 'react'
import { Container, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'



function NavbarAddDoctor() {
    return (
        <div className='WrapperNavbar'>
            <Container className='bg-light h-100 mt-3 rounded-4'>
                <Row>
                    <Col>
                        <h2 className='word'>Register Doctor Account</h2>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center mt-3'>
                        <DropdownButton id="dropdown-basic-button" title="Menu" variant='secondary'>
                            <Dropdown.Item href="/LoginPage">Log Out</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default NavbarAddDoctor