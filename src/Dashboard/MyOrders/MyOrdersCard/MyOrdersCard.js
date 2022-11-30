import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MyOrdersCard = ({ data}) => {
    const { name, img, resale_price, original_price } = data;
    return (
        <Col md={6} lg={4}>
            <Card className='p-2 card mb-3 cardProduct'>
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <p className=''>Original Price: {original_price} Taka</p>
                    <p className=''>Resale Price: {resale_price} Taka</p>
                    <Button variant="primary" >Pay Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyOrdersCard;