import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";



const AllSellersCard = ({ data, handleDelete }) => {
    const { name, img, email, _id } = data;
    return (
        <Col md={6} lg={4}>
            <Card className='p-2 card mb-3 cardProduct'>
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <p>Email: {email}</p>
                    <div className='d-flex justify-content-between'>
                        <Button variant="primary" >Verify</Button>
                        <span onClick={() => handleDelete(_id)} className='px-2 py-2 fw-bold fs-3' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer' }}></FaTrashAlt></span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllSellersCard;