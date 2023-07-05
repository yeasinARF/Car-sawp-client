import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RelatedProductCard = ({ data }) => {
    const { name,item_id,img, resale_price } = data;
    const b = parseInt(resale_price);
    const resalePrice = b.toLocaleString('en-IN')
    return (
        <>
            <Col md={4} lg={3}>
                
                <Link to={`/singleCar/${item_id}`} style={{textDecoration:'none',color:'black'}}>
                    <Card className='p-2'>
                        <Card.Img variant="top" className='rounded w-100 ' src={img} style={{ height: '150px' }} />
                        <Card.Body>
                            <p className='fw-bold'>{name}</p>
                            <p>Price: $ {resalePrice}</p>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    );
};

export default RelatedProductCard;