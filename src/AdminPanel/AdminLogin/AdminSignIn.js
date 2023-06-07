import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import LoaderSpin from '../../Utilities/Context/Loader/LoaderSpin';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Utilities/Context/UserContext';
import admin from '../../Images/admin.png'

const AdminSignIn = () => {
    const { logIn, loader, setLoader } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    const [error, setError] = useState('')
    if (loader) {
        return <LoaderSpin></LoaderSpin>;
    }
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                //navigate user
                navigate(from, { replace: true });
                // setLoader(false)
                console.log(user);

            })
            .catch(error => {
                const errorMsg = error.message;
                setError(errorMsg)
                setLoader(false);
            })
        
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col className='mx-auto' lg={6} md={6} sm={11} xs={11} >
                        <img className='img-fluid rounded' src={admin} alt="" />
                    </Col>
                    <Col className='mx-auto mt-4' lg={5} md={8} sm={9} xs={10} >
                        <Form onSubmit={handleLogIn} className='container rounded formContainer mx-auto text-black my-3 pt-2'>
                            <h1 className='py-3 text-center'>Admin Login</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{ fontSize: '1.2rem' }}>Email address</Form.Label>
                                <Form.Control type="email" style={{ fontSize: '1rem' }} placeholder="Enter email" name="email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ fontSize: '1.2rem' }}>Password</Form.Label>
                                <Form.Control style={{ fontSize: '1.2rem' }} type="password" placeholder="Password" name="password" required />
                            </Form.Group>
                            <Button style={{ backgroundColor: '#6B43FB', width: '110px', height: '40px', fontSize: '1rem', border: 'none' }} type="submit">
                                Login
                            </Button>

                            <p className='fw-bold my-3' style={{ fontSize: '1.2rem' }}>Demo Admin Account Details</p>
                            <p>Email: admin@gmail.com</p>
                            <p>Password: 12345678</p>
                            <p className='py-3 text-danger'>{error}</p>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminSignIn;