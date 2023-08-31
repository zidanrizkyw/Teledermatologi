import React, { useState, Fragment } from 'react'
import { Container, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'


function NavbarDetailPatient() {
    const [logout, setLogout] = useState(false)

    function doLogout() {
        localStorage.removeItem("token")
        setLogout(true)
    }
    return (
        <Fragment>
            {
                logout && (
                    <Navigate to="/LoginPage"/>
                )
            }
            <div className='WrapperNavbar'>
                <Container className='bg-light h-100 mt-3 rounded-4'>
                    <Row>
                        <Col>
                            <h2 className='word'>Detail Patient</h2>
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center mt-3'>
                            <DropdownButton id="dropdown-basic-button" title="Menu" variant='secondary'>
                                <Dropdown.Item href="/LoginPage">Log Out</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}
export default NavbarDetailPatient