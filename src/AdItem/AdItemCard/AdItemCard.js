import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AdItemCard = ({ data }) => {
    const { name, img } = data;
    return (
        <Col md={6} lg={4}>
            <Card className='p-2 card mb-3 cardProduct'>
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AdItemCard;