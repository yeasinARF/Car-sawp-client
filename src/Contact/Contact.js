import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import contactImage from '../Images/contact.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

const Contact = () => {
    const handleMessage = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const text = form.text.value;
        
        

        const message = {
            
            name,
            email,
            text: text,
            time: moment().format('lll'),
        }
        console.log(message);
        fetch("http://localhost:5000/message", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(message),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {

                    
                    toast.success(" Message Sent");
                    e.target.reset();
                }
            });
    };

    return (
        <Container className='my-3'>
            <Row >
                <Col className='mx-auto' lg={7} md={10} sm={12} xs={12} >
                    <img className='img-fluid rounded d-block' style={{ marginTop: '-30px' }} src={contactImage} alt="" />
                </Col>
                <Col className='mx-auto ' lg={5} md={10} sm={12} xs={12} >
                    <Form className='container rounded formContainer mx-auto text-black my-3 pt-2'onSubmit={handleMessage}>
                        <h1 className='py-3 text-start' ><span >Get In </span><span style={{color:'#6B43FB'}}>Touch</span></h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" name="name" required />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Message</Form.Label>
                            <Form.Control as="textarea" name="text" rows={3} />
                        </Form.Group>
                        <Button style={{ backgroundColor: '#6B43FB', width: '150px', height: '40px', fontSize: '1rem', border: 'none' }} type="submit">
                            Send Message
                        </Button>

                    </Form>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
        
    );
};

export default Contact;