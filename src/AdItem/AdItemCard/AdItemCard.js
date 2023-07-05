import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import '../AdItemCard/AdItemCard.css';
import { Link } from 'react-router-dom';
const AdItemCard = ({ data }) => {
    const { name, img, resale_price, years_of_use, item_id } = data;
    const a = parseInt(resale_price);
    const resalePrice = a.toLocaleString('en-IN');
    return (
        <Col md={6} lg={4}>
            <Card className='p-2 card mb-3 cardProduct border-0 mt-4' style={{ backgroundColor: "rgb(227, 227, 227)" }}>
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body style={{ color: 'black' }}>
                    <Card.Title className='fw-bold' style={{ textAlign: 'left' }}>{name}</Card.Title>
                    <Card.Title style={{ textAlign: 'left' }}><span className='fw-bold pe-1'>$</span>{resalePrice}</Card.Title>
                    <Card.Title style={{ textAlign: 'left' }}><span className='fw-bold pe-1'>Used:</span>{years_of_use} yr/yrs</Card.Title>
                    <div className='text-start'>
                        <Link className='ExploreButtonLink text-white text-decoration-none ' to={`/singleCar/${item_id}`} ><Button className='px-4 py-2 my-4 fw-bold' style={{ backgroundColor: '#6B43FB', width: '110px', height: '40px', fontSize: '0.9rem', border: 'none' }}>Buy Now</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AdItemCard;