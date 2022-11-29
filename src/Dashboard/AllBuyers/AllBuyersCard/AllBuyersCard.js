import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const AllBuyersCard = () => {
    return (
        <Col md={6} lg={4}>
            <Card className='p-2 card mb-3 cardProduct'>
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <p>Email: {email}</p>
                    <div className='d-flex justify-content-between'>
                        <Button variant="primary">Verify</Button>
                        <Button onClick={() => handleDelete(_id)} className='px-3 py-2 fw-bold text-white' variant='primary'>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllBuyersCard;