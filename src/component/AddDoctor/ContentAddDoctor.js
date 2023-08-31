import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'





function ContentAddDoctor() {
    return (
        <div className='WrapperContent'>
            <Container className='bg-light h-100 mt-3 rounded-4'>
                <Row>
                    <Col>
                    <Form className="border shadow p-3 bg-light formlogin mt-4">
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="mb-3" variant="primary" type="submit" href="/DashboardAdmin">
                                Add
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContentAddDoctor
