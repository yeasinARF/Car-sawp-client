import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, ToastContainer } from 'react-bootstrap';
import BookNow from '../../../BookNow/BookNow';
import seller from '../../../Images/user.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RelatedProduct from '../../../RelatedProduct/RelatedProduct';

const IndividualProductCard = ({ data }) => {
    const { name, img, resale_price, original_price, years_of_use, seller_name, _id, time, stockQuantity, condition, seller_image } = data;
    const [disable, setDisable] = useState(false)
    const a = parseInt(original_price);
    const originalPrice = a.toLocaleString('en-IN');
    const b = parseInt(resale_price);
    const resalePrice = b.toLocaleString('en-IN');
    const handleReportToAdmin = (_id) => {
        const reportedItem = {
            name: name,
            img: img,
            item_id: _id,
            time: new Date(),
        }
        fetch(`https://car-swap-server.vercel.app/reportedItem/${_id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reportedItem),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Successfully Reported this item");
                    setDisable(true)
                }
                else {
                    toast("Something Went Wrong!");
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <Container>
            <Card className='p-2 card my-5 cardProduct ' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                <Row>
                    <Col md={6} lg={7}>
                        <Card.Img variant="top" className='w-100 rounded ' src={img} style={{ height: '450px' }} />
                    </Col>
                    <Col md={6} lg={5}>
                        <Card.Body>
                            <Card.Title className='fw-bold'>{name}</Card.Title>
                            <h6>
                                <p className=''>Original Price: $ {originalPrice} </p>
                                <p className=''>Resale Price: $ {resalePrice} </p>
                                <p className=''>Condition:<span></span> {condition}</p>
                                <p className=''>Year of Use: {years_of_use} yr/yrs</p>
                                <p className=''>Stock Quantity: {stockQuantity} pc</p>
                                <div>
                                    <p className='' style={{ fontWeight: 'bold', textTransform: 'capitalize' }}><span><img className='locImg' style={{ height: '50px', width: '50px', borderRadius: '30px', border: '3px solid #6B43FB' }} src={seller_image} alt="" /></span> {seller_name}</p>
                                    <p className=''>Posted On: <span>{time}</span></p>
                                </div>
                            </h6>
                            <div className='d-flex justify-content-between'>
                                <BookNow data={data}></BookNow>
                                <Button className='w-100' style={{ backgroundColor: '#6B43FB', width: '120px', height: '40px', fontSize: '1rem', border: 'none' }} disabled={disable} onClick={() => handleReportToAdmin(_id)}>Report</Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <h5 className='text-center pb-3'>{name} <span style={{ color: '#7D43FB' }}> Full Specifications</span></h5>
            <Container className='mb-3'>
                <Row className='g-3'>
                    <Col md={6} lg={6}>
                        <Card className='' style={{ border: 'none' }}>
                            <h6 className='px-2 pt-3'>General</h6>
                            <div className='d-flex pt-3 px-2' style={{ justifyContent: 'space-between', backgroundColor: '#CECECE', }}>
                                <p >Model</p>
                                <p>{name}</p>
                            </div>
                            <div className='d-flex pt-3 px-2' style={{ justifyContent: 'space-between' }}>
                                <p>Year of Use</p>
                                <p>{years_of_use}</p>
                            </div>
                            <div className='d-flex pt-3 px-2' style={{ justifyContent: 'space-between', backgroundColor: '#CECECE' }}>
                                <p>Price</p>
                                <p>$ {resalePrice}</p>
                            </div>
                            <div className='d-flex pt-3 px-2' style={{ justifyContent: 'space-between' }}>
                                <p>Condition</p>
                                <p>{condition}</p>
                            </div>
                        </Card>
                    </Col>
                    <Col md={6} lg={6}>
                        <Card className='' style={{ border: 'none' }}>
                            <h6 className='px-2 pt-3'>Car Details</h6>
                            <div className='d-flex pt-3 px-2' style={{ justifyContent: 'space-between', backgroundColor: '#CECECE' }}>
                                <p>Engine Capacity</p>
                                <p>1800 CC</p>
                            </div>
                            <div className='d-flex pt-3 px-2' style={{ justifyContent: 'space-between' }}>
                                <p>Mileage</p>
                                <p>31,000</p>
                            </div>
                            <div className='d-flex pt-3 px-2' style={{ justifyContent: 'space-between', backgroundColor: '#CECECE' }}>
                                <p>Fuel Type</p>
                                <p>CNG</p>
                            </div>
                            <div className='d-flex pt-3 px-2' style={{ justifyContent: 'space-between' }}>
                                <p>Transmission</p>
                                <p>Automatic</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <RelatedProduct ></RelatedProduct>
            <ToastContainer />
        </Container>
    );
};

export default IndividualProductCard;