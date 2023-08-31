import React from 'react'
import { Container, Row, Col, Table, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function ContentProfilePatient() {
    return (
        <div className='WrapperContent'>
            <Container className='bg-light h-100 mt-3 rounded-4'>
                <Row>
                    <Col className='myscrollbar'>
                        <Col className='mt-3 mb-3 d-flex '>
                            <div className='infopatient1'>
                                <h5>Name</h5>
                                <h5>Gender</h5>
                                <h5>No. Telp</h5>
                                <h5>Email</h5>
                                <h5>Status</h5>
                            </div>
                            <div className='infopatient1'>
                                <h5>:</h5>
                                <h5>:</h5>
                                <h5>:</h5>
                                <h5>:</h5>
                                <h5>:</h5>
                            </div>
                            <div className='infopatient2'>
                                <h5>Marky</h5>
                                <h5>Laki-Laki</h5>
                                <h5>0845676543</h5>
                                <h5>Marky@gmail.com</h5>
                                <h5>Not Corfimed</h5>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ContentProfilePatient