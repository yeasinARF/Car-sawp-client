import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import loc from '../../../Images/location.png';
import seller from '../../../Images/user.png';
import './ProductCard.css'

const ProductCard = ({ data }) => {
    const { name, img, location, resale_price, original_price, years_of_use, seller_name } = data;
    return (
        <Col md={6} lg={4}>
            <Card className='p-2 card my-5 cardProduct'>
                <Card.Img variant="top" className='w-100 h-50 rounded img-fluid' src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <h6>
                        <p className=''><img className='locImg' src={loc} alt="" /> {location}</p>
                        <p className=''>Original Price:<span></span> {original_price}</p>
                        <p className=''>Resale Price:<span></span> {resale_price}</p>
                        <p className=''>Year of Use:<span></span> {years_of_use}</p>
                        <div>
                            <p className=''><span><img className='locImg' src={seller} alt="" /></span> {seller_name}</p>
                            <p className=''>Posted On:<span></span></p>
                        </div>
                    </h6>
                    <div className='d-flex justify-content-between'>
                        <Button variant="primary">Book Now</Button>
                        <Button variant="primary">Report</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;