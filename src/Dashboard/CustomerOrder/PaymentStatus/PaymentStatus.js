import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Utilities/Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './PaymentStatus.css'
import edit from '../../../Images/edit.png';
import noEdit from '../../../Images/editing.png'

const PaymentStatus = ({ data }) => {
    const { payment_status, _id, orderId, orderQuantity, buyer_number, buyer_name, resale_price, buyer_location, name, price, delivery_status } = data;
    const { user } = useContext(AuthContext);
    const [charge, setCharge] = useState('60')
    const [outside, setOutside] = useState('120')
    const deliveryFee = parseInt(charge)
    const deliveryOut = parseInt(outside)


    console.log(_id)

    const [update, setUpdate] = useState(data);
    const [show, setShow] = useState(false);
    const [select, setSelect] = useState();
    const [delivery, setDelivery] = useState();
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
                    toast.success('Update Successfully', {
                        position: toast.POSITION.TOP_RIGHT,
                        className: 'toast-message'
                    });
                }
            })
    }
    const handleOnchange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const payment_status = { ...update };
        const delivery_status = { ...delivery };
        delivery_status[field] = value;

        payment_status[field] = value;
        setUpdate(payment_status);
        setDelivery(delivery_status);
    }
    console.log(update);
    return (
        <Container>

            {
                (payment_status === 'Paid' && delivery_status === 'Delivered') ? <span className='  fw-bold  '><img src={noEdit} alt="product" style={{ height: '20px', width: '20px', cursor: 'not-allowed' }} /></span> : <span className='  fw-bold ' style={{ cursor: 'pointer' }} ><img onClick={handleShow} className='' src={edit} style={{ height: '20px', width: '20px' }} alt="" /></span>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: '#6B43FB' }} closeVariant='white'>
                    <Modal.Title style={{ color: 'white' }}>Edit Order</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '75vh', overflowY: 'scroll' }} >
                    <Form onSubmit={handleUpdate}>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <div>
                                <h6 className='fw-bolder'>Order Info:</h6>
                                <small className='fw-bold'>Order Code:</small>
                                <Form.Group
                                    className="mb-3 w-75"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    {payment_status === 'Paid' ?
                                        <Form.Control
                                            type="text"
                                            placeholder="Item Code"
                                            defaultValue={orderId}
                                            name='orderID'
                                            disabled
                                            style={{ cursor: 'not-allowed', fontSize: '0.8rem' }}
                                        />
                                        : <Form.Control
                                            type="text"
                                            placeholder="Item Code"
                                            defaultValue={orderId}
                                            name='orderID'
                                            style={{ cursor: '', fontSize: '0.8rem' }}
                                        />
                                    }
                                </Form.Group>
                                <small className='fw-bold' style={{ fontSize: '0.8rem' }}>Product Name:</small>
                                <Form.Group
                                    className="mb-3 w-75"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    {payment_status === 'Paid' ?
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            defaultValue={name}
                                            name='name'
                                            disabled
                                            style={{ fontSize: '0.8rem' }}
                                        />
                                        :
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            defaultValue={name}
                                            name='name'
                                            style={{ fontSize: '0.8rem' }}
                                        />
                                    }
                                </Form.Group>
                                <small className='fw-bold'>Order Quantity:</small>
                                <Form.Group
                                    className="mb-3 w-75"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    {payment_status === 'Paid' ?
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            defaultValue={orderQuantity}
                                            name='name'
                                            disabled
                                            style={{ fontSize: '0.8rem' }}
                                        />
                                        :
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            defaultValue={orderQuantity}
                                            name='name'

                                            style={{ fontSize: '0.8rem' }}
                                        />
                                    }
                                </Form.Group>
                                <small className='fw-bold'>Unit Price:</small>
                                <Form.Group
                                    className="mb-3 w-75"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    {payment_status === 'Paid' ? <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        defaultValue={`$ ${(resale_price).toLocaleString('en-IN')}`}
                                        name='name'
                                        disabled
                                        style={{ fontSize: '0.8rem' }}
                                    />
                                        :
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            defaultValue={`$ ${(resale_price).toLocaleString('en-IN')}`}
                                            name='name'
                                            style={{ fontSize: '0.8rem' }}
                                        />
                                    }
                                </Form.Group>
                                <small className='fw-bold'>Sub Total:</small>
                                <Form.Group
                                    className="mb-3 w-75"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    {payment_status === 'Paid' ? <Form.Control
                                        type="text"
                                        placeholder="original price"
                                        defaultValue={`$ ${price.toLocaleString('en-IN')}`}
                                        name='original_price'
                                        disabled
                                        style={{ fontSize: '0.8rem' }}
                                    />
                                        :
                                        <Form.Control
                                            type="text"
                                            placeholder="original price"
                                            defaultValue={`$ ${price.toLocaleString('en-IN')}`}
                                            name='original_price'
                                            style={{ fontSize: '0.8rem' }}
                                        />
                                    }
                                </Form.Group>
                                <p style={{ fontSize: '0.8rem' }}><span className='fw-bold'>Delivery Fee: </span>$ {buyer_location === 'Dhaka' ? charge : outside}</p>
                                <label className='fw-bold' style={{ fontSize: '0.8rem' }}>Payment Status</label>
                                {
                                    payment_status === 'Paid' ? <select disabled className='' value={select} name='payment_status' onChange={handleOnchange} style={{ border: '2px solid #808080', backgroundColor: '#E3E3E3', cursor: 'not-allowed', marginBottom: '10px', outline: 'none', height: '30px', width: '150px', marginLeft: '10px', borderRadius: '6px', fontSize: '0.8rem' }}>
                                        <option selected disabled hidden>
                                            {payment_status}
                                        </option>
                                        <option>Unpaid</option>
                                        <option>Paid</option>
                                    </select>
                                        : <select className='' value={select} name='payment_status' onChange={handleOnchange} style={{ border: '2px solid #6B43FB', cursor: 'pointer', marginBottom: '10px', outline: 'none', height: '30px', width: '150px', marginLeft: '10px', borderRadius: '6px', fontSize: '0.8rem' }}>
                                            <option selected disabled hidden>
                                                {payment_status}
                                            </option>
                                            <option>Unpaid</option>
                                            <option>Paid</option>
                                        </select>
                                }
                                <br></br>
                                <label className='fw-bold' style={{ fontSize: '0.8rem' }}>Delivery Status</label>
                                <select className='' value={select} name='delivery_status' onChange={handleOnchange} style={{ border: '2px solid #6B43FB', cursor: 'pointer', marginBottom: '10px', outline: 'none', height: '30px', width: '150px', marginLeft: '10px', borderRadius: '6px', fontSize: '0.8rem' }}>
                                    <option selected disabled hidden >
                                        {delivery_status}
                                    </option>
                                    <option>Pending</option>
                                    <option>Processing</option>
                                    <option>Delivered</option>
                                </select><br></br>
                            </div>
                            <div>
                                <h6 className='fw-bolder'>Customer Info:</h6>
                                <p style={{ textTransform: 'capitalize', fontSize: '0.8rem' }}><span className='fw-bold'>Customer Name: </span>{buyer_name}</p>
                                <p style={{ fontSize: '0.8rem' }}><span className='fw-bold'>Customer Phone: </span>{buyer_number}</p>
                                <small className='fw-bold ' style={{ fontSize: '0.8rem' }}>Shipping Address:</small>
                                <Form.Group
                                    className="mb-3 w-100"
                                    controlId="exampleForm.ControlInput1"
                                    style={{ fontSize: '0.8rem' }}
                                >
                                    {payment_status === 'Paid' ?
                                        <Form.Control
                                            type="text"
                                            placeholder="selling price"
                                            defaultValue={buyer_location}
                                            name='resale_price'
                                            disabled
                                            style={{ fontSize: '0.8rem' }}
                                        />
                                        : <Form.Control
                                            type="text"
                                            placeholder="selling price"
                                            defaultValue={buyer_location}
                                            name='resale_price'
                                            style={{ fontSize: '0.8rem' }}
                                        />
                                    }
                                </Form.Group>
                            </div>
                        </div>
                        <hr></hr>
                        <p className='fw-bold' style={{ fontSize: '0.8rem' }}>Total: $ {buyer_location === 'Dhaka' ? (deliveryFee + parseInt(price)).toLocaleString('en-IN') : (deliveryOut + parseInt(price)).toLocaleString('en-IN')}</p>
                        <Button
                            className="text-center book_btn pe-5 "
                            type='submit'
                            style={{ backgroundColor: '#6b43fb', marginLeft: '10px', width: '100px' }}
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
        </Container>
    );
};

export default PaymentStatus;