import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Utilities/Context/UserContext';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import edit from '../../../../Images/edit.png';

const EditProduct = ({ data }) => {
    const { name,_id, resale_price, original_price,item_code , stockQuantity } = data;
    const { user } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    // console.log(_id)
    const [nameUpdate, setNameUpdate] = useState(data);
    const [stockUpdate, setStockUpdate] = useState(data);
    const [saleUpdate, setSaleUpdate] = useState(data);

    const handleClose = () => {
        window.location.reload();
        setShow(false)
    }
    const handleShow = () => setShow(true);
    const handleUpdate = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(nameUpdate,stockUpdate,saleUpdate)
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
        const stockQuantity={ ...stockUpdate};
        const saleAmount={...saleUpdate};
        name[field] = value;
        setNameUpdate(name);
        console.log(nameUpdate);
        stockQuantity[field] = value;
        setStockUpdate(stockQuantity);
        saleAmount[field]=value;
        setSaleUpdate(saleAmount);
    }
    // console.log(nameUpdate,stockUpdate);
    
    return (
        <Container>
            <span className='  fw-bold ' style={{ cursor: 'pointer' }} ><img onClick={handleShow} className='' src={edit} style={{ height: '20px', width: '20px' }} alt="" /></span>
            <Modal show={show} onHide={handleClose} className='d-flex' style={{position:'fixed',top:'0px',}}>
                <Modal.Header closeButton style={{backgroundColor:'#6B43FB'}} closeVariant='white'>
                    <Modal.Title style={{color:'white'}}>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{maxHeight:'75vh',overflowY:'scroll'}}  >
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
                        {/* <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                        
                        </Form.Group> */}
                        <small className='fw-bold'>Item Code:</small>
                        <Form.Group
                            className="mb-3 w-100"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Item Code"
                                defaultValue={item_code }
                                onChange={handleOnchange}
                                name='original_price'
                                disabled
                                style={{cursor:'not-allowed'}}

                            />
                        </Form.Group>
                        <small className='fw-bold'>Original Price:</small>
                        <Form.Group
                            className="mb-3 w-100"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="original price"
                                defaultValue={original_price}
                                onChange={handleOnchange}
                                name='original_price'
                                disabled
                                style={{cursor:'not-allowed'}}

                            />
                        </Form.Group>
                        <small className='fw-bold '>Resale Price:</small>
                        <Form.Group
                            className="mb-3 w-100"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="text"
                                placeholder="selling price"
                                defaultValue={resale_price}
                                onChange={handleOnchange}
                                name='resale_price'

                            />
                        </Form.Group>
                        <small className='fw-bold'>Stock Quantity:</small>
                        <Form.Group
                            className="mb-3 w-50"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control
                                type="number"
                                placeholder="stock quantity"
                                defaultValue={stockQuantity}
                                onChange={handleOnchange}
                                name='stockQuantity'
                            />
                        </Form.Group>
                        <Button
                            className="text-center book_btn pe-5 ps-5"
                            type='submit'
                            style={{backgroundColor:'#6b43fb'}}

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

export default EditProduct;