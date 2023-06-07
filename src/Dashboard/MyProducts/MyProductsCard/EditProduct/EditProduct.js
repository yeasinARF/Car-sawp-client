import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Utilities/Context/UserContext';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import edit from '../../../../Images/edit.png';

const EditProduct = ({ data }) => {
    const { name, resale_price, original_price, img, stockQuantity } = data;
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
        const UpdateItems = {
            name: name,
            img: img,
            buyer_name: user.displayName,
            email: user.email,
            resale_price,
            original_price,
            time: new Date(),
            buyer_number: phoneNumber,
            buyer_location: meetingLocation,
            payment_status: 'unpaid'
        }
        fetch(`https://car-swap-server.vercel.app/orderItems`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(UpdateItems),
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
            <span className='  fw-bold fs-3' style={{ cursor: 'pointer' }} ><img onClick={handleShow} className='' src={edit} style={{ height: '33px', width: '33px' }} alt="" /></span>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddOrder}>
                        <small className='fw-bold'>Product Name:</small>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                defaultValue={name}

                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >

                        </Form.Group>
                        <small className='fw-bold'>Original Price:</small>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="original price"
                                defaultValue={original_price}

                            />
                        </Form.Group>
                        <small className='fw-bold'>Resale Price:</small>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="selling price"
                                defaultValue={resale_price}

                            />
                        </Form.Group>
                        <small className='fw-bold'>Stock Quantity:</small>
                        <Form.Group
                            className="mb-3 w-25"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="number"
                                placeholder="stock quantity"
                                defaultValue={stockQuantity}

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

export default EditProduct;