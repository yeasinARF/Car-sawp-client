import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Utilities/Context/UserContext';

const AddCategories = () => {
    const { user } = useContext(AuthContext)
    const handleAddCategory = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.category.value;
        const image = form.categoryImage.value;
        const category = {
            name,
            img: image,
            time: new Date(),
            seller_email: user.email,
        }
        fetch("http://localhost:5000/categories", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(category),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Category Added Successfully");
                    e.target.reset();
                }
            });
    }

    return (
        <Container>
            <Row className='mb-5'>
                <Col md={8}>
                    <Form onSubmit={handleAddCategory}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Brand Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter brand name" name='category' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Brand Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter brand Image Url" name="categoryImage" required />
                        </Form.Group>
                        <Button style={{ backgroundColor: '#6B43FB', width: '130px', height: '40px', fontSize: '1.2rem', border: 'none' }} type="submit">
                            Create
                        </Button>
                    </Form>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default AddCategories;