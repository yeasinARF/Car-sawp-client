import React, { useContext, useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { AuthContext } from '../Utilities/Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import './BookNow.css'

const BookNow = ({ data }) => {
    const { name, resale_price, original_price, img, seller_email, stockQuantity, _id } = data;
    const { user } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [subTotalPrice,setSubTotalPrice]=useState('0');
    const [orderQuantity,setOrderQuantity]=useState('1');
    const salePrice=parseInt(resale_price);
    const priceSale=salePrice.toLocaleString('en-IN');
    
    const handleClose = () => {

        setShow(false)
    }
    const [delivery, setDelivery] = useState('Cash On Delivery');
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        const form = e.target;
        const value = form.value;
        setDelivery(value);
        setSubTotalPrice(value);
        // console.log(role);
    }
    const handleSubtotal =e=>{
        const form = e.target;
        const value = form.value;
        setOrderQuantity(value)
    }
    const handleAddOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const meetingLocation = form.location.value;
        const phoneNumber = form.number.value;

        const a = parseInt(resale_price)
        const b = parseInt(orderQuantity)
        const c = parseInt(stockQuantity)
        
        const remainStock = (c - b);
        const orderId=Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);
        
        const price = (b * a);
        
        if (b > c || b === 0) {
            toast(`Insufficient Quantity! Please, try again.`);
        }
        else {
            const OrderItems = {
                name: name,
                img: img,
                buyer_name: user.displayName,
                email: user.email,
                seller_email,
                resale_price,
                original_price,
                orderQuantity,
                delivery: delivery,
                time: moment().format('lll'),
                buyer_number: phoneNumber,
                buyer_location: meetingLocation,
                payment_status: 'Unpaid',
                delivery_status: 'Pending',
                price,
                orderId,
                remainStock,

            }
            fetch('http://localhost:5000/orderItems', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(OrderItems),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        toast.success('Order Confirmed', {
                            position: toast.POSITION.TOP_RIGHT,
                            className: 'toast-message'
                        });
                        setShow(false);
                    }
                    else {
                        toast.error('Something wrong', {
                            position: toast.POSITION.TOP_RIGHT,
                            className: 'toast-message'
                        });
                    }
                })
                .catch(err => console.error(err));
            // update stock
            
        }


    }
    return (
        <Container>
            {
                stockQuantity > 5 ?
                    <Button style={{ backgroundColor: '#6B43FB', width: '130px', height: '40px', fontSize: '1rem', border: 'none' }} onClick={handleShow}>
                        Book Now
                    </Button>
                    : <Button className='' style={{ backgroundColor: '#6B43FB', width: '200px', height: '40px', fontSize: '0.9rem', border: 'none' }} disabled>Out of stock</Button>

            }


            <Modal show={show} onHide={handleClose} style={{position:'fixed',top:'0px',}}>
                <Modal.Header  closeButton style={{backgroundColor:'#6B43FB'}} closeVariant='white'>
                    <Modal.Title style={{color:'white',}}>Checkout Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{maxHeight:'75vh',overflowY:'scroll'}}>
                    <Form onSubmit={handleAddOrder}>
                        <h6>Order Details</h6>
                        <Form.Group
                            className="mb-3 mt-3 w-50"
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

                        </Form.Group>
                        <Form.Group
                            className="mb-3 w-25"
                            controlId="exampleForm.ControlInput1"

                        >
                            <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Quantity</Form.Label>
                            <Form.Control onChange={handleSubtotal} type="number" name='quantity' defaultValue='1' placeholder="Quantity" required />
                        </Form.Group>
                        
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label className='text-black pe-3'>Unit Price:</Form.Label>
                            <label>{`$ ${salePrice}`}</label>
                        </Form.Group>
                        <hr></hr>
                        <Form.Group
                            className="mb-3 w-50"
                            controlId="exampleForm.ControlInput1"

                        >
                            <label style={{fontWeight:'bold'}}>Sub Total:</label>
                            <label className='ms-3'>$ {parseInt(orderQuantity)*salePrice}</label>
                        </Form.Group>

                        <hr></hr>
                        <h6>Customer Details</h6>
                        <Form.Group
                            className="mb-3 mt-3 w-50"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label className='text-black'>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="user name"
                                defaultValue={user?.displayName}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3 w-50"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label className='text-black'>Email</Form.Label>
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
                            <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Phone Number</Form.Label>
                            <Form.Control type="tel" name='number' placeholder="Phone Number" required />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Address</Form.Label>
                            <Form.Control type="text" name='location' placeholder="meeting location" required />
                        </Form.Group>
                        <hr></hr>
                        <h6>Payment Info</h6>
                        
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Cash On Delivery"
                                    name="option"
                                    value="Cash On Delivery"
                                    onChange={handleChange}
                                    type={type}
                                    id={`inline-${type}-1`}
                                    checked={delivery === 'Cash On Delivery'}
                                />


                            </div>
                        ))}
                        <Button
                            className="text-center book_btn pe-5 ps-5"
                            style={{ backgroundColor: '#6B43FB' }}
                            type='submit'

                        >
                            Confirm Order
                        </Button>
                        
                        
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer className="mx-auto p-0 pb-2">
                    <p
                        className="text-center book_btn pe-5 ps-5"
                        onClick={handleClose}
                    >
                        

                    </p>
                </Modal.Footer> */}
            </Modal>
            <ToastContainer />
        </Container>
    );
};

export default BookNow;