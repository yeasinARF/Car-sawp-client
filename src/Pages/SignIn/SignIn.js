import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import LoaderSpin from '../../Utilities/Context/Loader/LoaderSpin';
import { AuthContext } from '../../Utilities/Context/UserContext';
import log from '../../Images/log.png'
import useRole from '../../useRole';

const SignIn = () => {
    const { logIn, logInWithGoogle, logInWithGitHub, loader, setLoader } = useContext(AuthContext)
    const { user } = useContext(AuthContext);
    const [currentUser] = useRole(user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
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
        event.target.reset();
    }
    const handleLogInWithGoogle = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMsg = error.message;
                setError(errorMsg)
            })

    }
    const handleLogInWithGitHub = () => {
        logInWithGitHub()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => {
                const errorMsg = error.message;
                setError(errorMsg)
            })

    }
    return (
        <div>
            <Container >
                <Row>
                    <Col className='mx-auto' lg={7} md={8} sm={11} xs={11} >
                        <img className='img-fluid rounded d-lg-block d-none' style={{marginTop:'-30px'}} src={log} alt="" />
                    </Col>
                    <Col className='mx-auto' lg={5} md={8} sm={11} xs={11} >
                        <Form onSubmit={handleLogIn} className='container rounded formContainer mx-auto text-black my-3 pt-2'>
                            <h1 className='py-3 text-center'>User Login</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" required />
                            </Form.Group>
                            <Button style={{ backgroundColor: '#6B43FB', width: '110px', height: '40px', fontSize: '1rem', border: 'none' }} type="submit">
                                Login
                            </Button>


                            <p className='text-center'>Or</p>
                            <div className='text-center mb-2'>
                                <Button onClick={handleLogInWithGoogle} style={{ backgroundColor: '#6B43FB', width: '180px', height: '40px', fontSize: '1rem', border: 'none' }} >Login With <FaGoogle></FaGoogle> </Button>
                            </div>
                            <div className='text-center mb-3'>
                                <Button onClick={handleLogInWithGitHub} style={{ backgroundColor: '#6B43FB', width: '180px', height: '40px', fontSize: '1rem', border: 'none' }}>Login With <FaGithub></FaGithub> </Button>
                            </div>
                            
                            <p className='py-2 text-danger'>{error}</p>
                            <p className='text-center pb-2 '>Create New Account?<Link className="text-primary ps-2" to='/register'>Register Now</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;