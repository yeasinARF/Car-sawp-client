import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Utilities/Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PaymentStatus = ({ data }) => {
    const { payment_status, _id } = data;
    const { user } = useContext(AuthContext);
    
    
    
    console.log(_id)
    
    const [update, setUpdate] = useState(data);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        window.location.reload();
        setShow(false)
    }
    const handleShow = () => setShow(true);

    const handleUpdate = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/customerOrderId/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("Updated Successfully");
                    
                }
            })
    }
    const handleOnchange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const payment_status = { ...update };

        payment_status[field] = value;
        setUpdate(payment_status);
    }
    console.log(update);
    return (
        <Container>

            <Button style={{ backgroundColor: '#6B43FB', width: '130px', height: '40px', fontSize: '1rem', border: 'none' }} onClick={handleShow}>
                Update Status
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Status: {payment_status}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                defaultValue={payment_status}
                                onChange={handleOnchange}
                                name='payment_status'

                            />
                        </Form.Group>
                        <Button
                            className="text-center book_btn pe-5 ps-5"
                            type='submit'
                            

                        >
                            Update
                        </Button>

                    </Form>
                </Modal.Body>
                <Modal.Footer className="mx-auto p-0 pb-2" onClick={handleClose}>
                    <p
                        className="text-center book_btn pe-5 ps-5"

                    >

                    </p>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </Container>
    );
};

export default PaymentStatus;