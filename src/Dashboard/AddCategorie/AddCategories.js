import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategories = () => {
    const handleAddCategory = (e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.category.value;
        const image=form.categoryImage.value;
        const category = {
            name,
            img: image,
            time: new Date(),
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
            <Form onSubmit={handleAddCategory}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter category name" name='category' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Category Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter Category Image Url" name="categoryImage" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </Container>
    );
};

export default AddCategories;