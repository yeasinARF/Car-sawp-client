import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MyOrdersCard = ({ data }) => {
    const { name, img, resale_price,payment_status } = data;
    return (
        <Col md={6} lg={6} >
            <Card className='p-2 card mb-3 cardProduct'style={{boxShadow:"2px 2px 10px 4px rgb(211, 211, 211)",backgroundColor:"rgb(227, 227, 227)",border:'none'}} >
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <p className=''>Price: {resale_price} TK</p>
                    <p className=''>Status: {payment_status} </p>
                    <div className='d-flex' style={{justifyContent:'space-between'}}>
                        <Button variant="primary" >Checkout</Button>
                        <Button variant="primary" >Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyOrdersCard;