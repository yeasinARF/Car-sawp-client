import React, { useContext, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { AuthContext } from '../Utilities/Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNow = ({ data }) => {
    const { name, resale_price, original_price, img,seller_email } = data;
    const { user } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const handleClose = () => {

        setShow(false)
    }
    const handleShow = () => setShow(true);
    const handleAddOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const meetingLocation = form.location.value;
        const phoneNumber = form.number.value;
        const OrderItems = {
            name: name,
            img: img,
            buyer_name:user.displayName,
            email:user.email,
            seller_email,
            resale_price,
            original_price,
            time: new Date(),
            buyer_number:phoneNumber,
            buyer_location:meetingLocation,
            payment_status:'unpaid'
        }
        fetch(`https://car-swap-server.vercel.app/orderItems`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(OrderItems),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Successfully ordered this item");
                    setShow(false);
                }
                else {
                    toast("Something Went Wrong!Try again");
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <Container>

            <Button style={{ backgroundColor: '#6B43FB', width: '130px', height: '40px', fontSize: '1rem', border: 'none' }} onClick={handleShow}>
                Book Now
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddOrder}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                defaultValue={name}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="user name"
                                defaultValue={user?.displayName}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="email"
                                placeholder="user email"
                                defaultValue={user?.email}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="selling price"
                                defaultValue={`Price: $ ${resale_price}`}
                                disabled
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control type="number" name='number' placeholder="Phone Number" required/>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control type="text" name='location' placeholder="meeting location" required />
                        </Form.Group>
                        <Button
                            className="text-center book_btn pe-5 ps-5"
                            type='submit'

                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="mx-auto p-0 pb-2">
                    <p
                        className="text-center book_btn pe-5 ps-5"
                        onClick={handleClose}
                    >

                    </p>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </Container>
    );
};

export default BookNow;