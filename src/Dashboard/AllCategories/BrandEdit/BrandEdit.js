import React, { useState } from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import edit from '../../../Images/edit.png';

const BrandEdit = ({data}) => {
    const {name,_id}=data
    const [show, setShow] = useState(false);
    const [nameUpdate, setNameUpdate] = useState(data);
    const handleClose = () => {
        window.location.reload();
        setShow(false)
    }
    const handleShow = () => setShow(true);
    const handleUpdate = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/categoriesData/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(nameUpdate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Updated Successfully");
                }
            })
    }
    const handleOnchange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const name = { ...nameUpdate };
        name[field] = value;
        setNameUpdate(name);
        console.log(nameUpdate);
    }
    return (
        <Container>
            <span className='  fw-bold ' style={{ cursor: 'pointer' }} ><img onClick={handleShow} className='' src={edit} style={{ height: '20px', width: '20px' }} alt="" /></span>
            <Modal show={show} onHide={handleClose} className='d-flex' style={{ position: 'fixed', top: '0px', }}>
                <Modal.Header closeButton style={{ backgroundColor: '#6B43FB' }} closeVariant='white'>
                    <Modal.Title style={{ color: 'white' }}>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '75vh', overflowY: 'scroll' }}  >
                    <Form onSubmit={handleUpdate}>
                        <small className='fw-bold'>Product Name:</small>
                        <Form.Group
                            className="mb-3 w-100"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                defaultValue={name}
                                onChange={handleOnchange}
                                name='name'
                            />
                        </Form.Group>
                        
                        <Button
                            className="text-center book_btn pe-5 ps-5"
                            type='submit'
                            style={{ backgroundColor: '#6b43fb' }}
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
        </Container>
    );
};

export default BrandEdit;