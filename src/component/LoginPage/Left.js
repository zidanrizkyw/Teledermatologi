import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import React, { useState, Fragment } from 'react';
import axios from "axios";



function Left() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [page, setPage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('')

    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
        setError('')
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        setError('')
    }

    const onChangeType = (e) => {
        const value = e.currentTarget.value
        setType(value)
        setError('')
    }

    const submitLogin = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        console.log(type)
        let url = "";
        


        if (type === "Patient") {
            url = 'https://api.telekardiologi.com/api/patient/login'
            setPage('/ProfilePatient')
        }
        if (type === "Doctor") {
            url = 'https://api.telekardiologi.com/api/doctor/login'
            setPage('/DashboardDoctor')
        }

        if (type === "Admin") {
            url = 'https://api.telekardiologi.com/api/admin/login'
            setPage('/DashboardAdmin')
        }
        
        axios.post(url, data)
            .then(result => {
                console.log(result);
                if (result.data.success) {
                    localStorage.setItem('token', result.data.token)
                    setRedirect(true)


                } else {
                    setError("Login Failed")

                }

            })
            .catch(e => {
                setError(e.response.data.message)
            })



    }


    return (
        <Fragment>
            {
                redirect && (
                    <Navigate to={page} />
                )
            }
            <div className="WrapperLeft">
                <Container className="d-flex justify-content-center align-items-center h-100 backgroundform">
                    <Row>
                        <Col>
                            {
                                error && (
                                    <Alert variant="danger">
                                        {error}
                                    </Alert>
                                )
                            }

                            <div className="login">
                                Log In
                            </div>
                            <div className="captionleft">
                                Welcome to Telemedicine Platform please put your login credentials
                                below to start
                            </div>
                            <form className="border shadow p-3 bg-light formlogin" onSubmit={submitLogin}>
                                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                    <Form.Label >
                                        Email address
                                    </Form.Label>
                                    <Form.Control value={email} onChange={onChangeEmail} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control value={password} onChange={onChangePassword} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicSelect">
                                    <Form.Select value={type} onChange={onChangeType} className="mb-3">
                                        <option>Select user type</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="Patient">Patient</option>
                                        <option value="Admin">Admin</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button className="mb-3" variant="primary" type="submit" >
                                    Login
                                </Button>
                            </form>
                            <div className="textsignup">
                                <div>Don't have account?</div>
                                <Link to="/RegisterPage" className='signup'>SignUp</Link>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </Fragment>


    )
}

export default Left;