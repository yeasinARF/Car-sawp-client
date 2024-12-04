import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import contactImage from '../Images/contact.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3egddzm', 'template_uzlttuk', form.current, 'SeDNis84J5xyzGET3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
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
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </Col>
            </Row>
            <ToastContainer />
        </Container>

    );
};

export default Contact;