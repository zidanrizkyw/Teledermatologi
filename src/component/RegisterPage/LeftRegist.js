import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LeftRegist() {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState('')
    const [error, setError] = useState('')

    const ChangeName = (e) => {
        const value = e.target.value
        setName(value)
        setError('')
    }
    const ChangeGender = (e) => {
        const value = e.target.value
        setGender(value)
        setError('')
    }
    const ChangePhone = (e) => {
        const value = e.target.value
        setPhone(value)
        setError('')
    }
    const ChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
        setError('')
    }
    const ChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        setError('')
    }

    const klikDaftar = () => {
        const data = {
            name: name,
            gender: gender,
            phone: phone,
            email: email,
            password: password
        }
        console.log(data)
        axios.post('https://api.telekardiologi.com/api/patient/register', data)
            .then(result => {
                if (result) {
                    if (result.data) {
                        setName('')
                        setGender('')
                        setPhone('')
                        setEmail('')
                        setPassword('')
                        setAlert(result.data.message)
                        setTimeout(() => {
                            setAlert('')
                        }, 3000)
                    }
                }

            })
            .catch(e => {
                setError(e.response.data.message)
            })

    }



    return (
        <div className="WrapperLeftRegist">
            <Container className="d-flex justify-content-center align-items-center backgroundform">
                <Row>
                    <Col>
                        {
                            error && (
                                <Alert variant="danger">
                                    {error}
                                </Alert>
                            )
                        }
                        {
                            alert && (
                                <Alert variant="success">
                                    {alert}
                                </Alert>
                            )
                        }

                        <div className="login">
                            Create Account
                        </div>
                        <div className="captionleft">
                            Welcome to Telemedicine Platform please put your data credentials
                            below to start
                        </div>
                        <Form className="border shadow p-3 bg-light formlogin">
                            <Form.Group className="mb-3 mt-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={name} onChange={ChangeName} placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control value={gender} onChange={ChangeGender} placeholder="Enter gender" />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control value={phone} onChange={ChangePhone} placeholder="Enter phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={email} onChange={ChangeEmail} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={password} onChange={ChangePassword} type="password" placeholder="Password" />
                                <Form.Text className="text-muted">
                                    Minimum 8 character.
                                </Form.Text>
                            </Form.Group>
                            <Button className="mb-3" onClick={klikDaftar} variant="primary" type="button">
                                Create
                            </Button>
                        </Form>
                        <div className="textsignup">
                            <div>Already have an account?</div>
                            <Link to="/LoginPage" className='signup'>Log In</Link>
                        </div>
                    </Col>

                </Row>
            </Container>


        </div>
    )
}

export default LeftRegist;