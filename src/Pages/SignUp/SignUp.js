import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Utilities/Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.picture.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 8) {
            toast("Please provide at least 8 character password");
            return;
        };
        signUp(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: displayName, photoURL: photoURL
                }).then(() => {
                    console.log('profile updated');
                }).catch((error) => {
                    console.log(error);
                });
                navigate('/login')
                toast("Registered Successfully");
                console.log(user);
            })
            .catch(error => {
                const errorMsg = error.message;
                setError(errorMsg)

            })
    }
    return (
        <Container>
            <Row>
                <Col className='mx-auto' lg={5} md={8} sm={9} xs={10} >
                    <Form onSubmit={handleSignUp} className='container rounded formContainer mx-auto text-black my-3 pt-2'>
                        <h1 className='py-3'>Create Account</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" name="name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo Url</Form.Label>
                            <Form.Control type="text" placeholder="Photo Url" name="picture" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <p className='py-3 text-danger'>{error}</p>
                        <p className='text-center pb-2'>Already have an account?<Link className="text-primary" to='/login'>Login</Link></p>
                    </Form>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default SignUp;