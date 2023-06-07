import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import PaymentStatus from '../PaymentStatus/PaymentStatus';

const CustomerOrderCard = ({ data }) => {
    const { name, img, resale_price, original_price, buyer_name, email, buyer_number, buyer_location, payment_status } = data;
    return (
        <Col md={6} lg={6} >
            <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }} >
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <p className=''>Price: $ {resale_price}</p>

                    <p className=''>Customer Name: {buyer_name} </p>
                    <p className=''>Customer Email: {email}</p>
                    <p className=''>Customer Phone: {buyer_number} </p>
                    <p className=''>Customer Location: {buyer_location}</p>
                    <p className=''>Status: {payment_status} </p>
                    <PaymentStatus data={data}></PaymentStatus>


                </Card.Body>
            </Card>
        </Col>
    );
};

export default CustomerOrderCard;