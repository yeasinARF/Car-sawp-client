import React, { useContext, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import view from '../../../../Images/view.png'

const ViewData = ({ data }) => {
    const { name, orderId, orderQuantity, _id, resale_price, original_price, buyer_name, email, price, buyer_number, buyer_location, payment_status, time, delivery_status } = data;
    const [show, setShow] = useState(false);
    const [charge, setCharge] = useState('60')
    const [outside, setOutside] = useState('120')
    const deliveryFee = parseInt(charge)
    const deliveryOut = parseInt(outside)
    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => setShow(true);
    return (
        <Container>
            <span className='  fw-bold ' style={{ cursor: 'pointer' }} ><img onClick={handleShow} className='' src={view} style={{ height: '20px', width: '20px' }} alt="" /></span>
            <Modal show={show} onHide={handleClose} className='d-flex' style={{ position: 'fixed', top: '0px', }}>
                <Modal.Header closeButton style={{ backgroundColor: '#6B43FB' }} closeVariant='white'>
                    <Modal.Title style={{ color: 'white' }}>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '75vh', overflowY: 'scroll' }}  >
                    <Form>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <div>
                                <h6 className='fw-bolder'>Order Info:</h6>
                                <small className='fw-bold'>Item Code:</small>
                                <Form.Group
                                    className="mb-3 w-75"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Item Code"
                                        defaultValue={orderId}
                                        name='orderID'
                                        disabled
                                        style={{ cursor: 'not-allowed', fontSize: '0.8rem' }}
                                    />
                                </Form.Group>
                                <small className='fw-bold' style={{ fontSize: '0.8rem' }}>Product Name:</small>
                                <Form.Group
                                    className="mb-3 w-100"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        defaultValue={name}
                                        name='name'
                                        disabled
                                        style={{ fontSize: '0.8rem' }}
                                    />
                                </Form.Group>
                                <small className='fw-bold'>Order Quantity:</small>
                                <Form.Group
                                    className="mb-3 w-50"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        defaultValue={orderQuantity}
                                        name='name'
                                        disabled
                                        style={{ fontSize: '0.8rem' }}
                                    />
                                </Form.Group>
                                <small className='fw-bold'>Sub Total:</small>
                                <Form.Group
                                    className="mb-3 w-75"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="original price"
                                        defaultValue={`$ ${price.toLocaleString('en-IN')}`}
                                        name='original_price'
                                        disabled
                                        style={{ fontSize: '0.8rem' }}
                                    />
                                </Form.Group>
                                <p style={{ fontSize: '0.8rem' }}><span className='fw-bold'>Delivery Fee: </span>$ {buyer_location === 'Dhaka' ? charge : outside}</p>
                            </div>
                            <div className='px-3 pt-3'>
                                <h6 className='fw-bolder'>Customer Info:</h6>
                                <p style={{ textTransform: 'capitalize', fontSize: '0.8rem' }}><span className='fw-bold'>Customer Name: </span>{buyer_name}</p>
                                <p style={{ fontSize: '0.8rem' }}><span className='fw-bold'>Customer Phone: </span>{buyer_number}</p>
                                <small className='fw-bold ' style={{ fontSize: '0.8rem' }}>Shipping Address:</small>
                                <Form.Group
                                    className="mb-3 w-100"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="selling price"
                                        defaultValue={buyer_location}
                                        name='resale_price'
                                        disabled
                                        style={{ fontSize: '0.8rem' }}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <hr></hr>
                        <p className='fw-bold' style={{ fontSize: '0.8rem' }}>Total: $ {buyer_location === 'Dhaka' ? (deliveryFee + parseInt(price)).toLocaleString('en-IN') : (deliveryOut + parseInt(price)).toLocaleString('en-IN')}</p>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ViewData;