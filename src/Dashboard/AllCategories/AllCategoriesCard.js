import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const AllCategoriesCard = ({ data }) => {
    const { name, img } = data;
    return (
        <Col md={4} lg={4} xs={8} className='mx-auto' >
            <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }} >
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '80px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                        <Button style={{ backgroundColor: '#6B43FB', width: '70px', height: '35px', fontSize: '0.9rem', border: 'none' }}>Edit</Button>
                        <Button style={{ backgroundColor: '#6B43FB', width: '70px', height: '35px', fontSize: '0.9rem', border: 'none' }}>Delete</Button>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllCategoriesCard;