import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import loc from '../../../Images/location.png';
import BookNow from '../../../BookNow/BookNow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import badge from '../../../Images/badge.png'
import './AllCarsCard.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const AllCarsCard = ({ data }) => {
    const { name, img, location, resale_price, original_price, status, years_of_use, seller_name, _id, time, seller_image, condition, stockQuantity, seller_verify } = data;
    const [disable, setDisable] = useState(false)
    const a = parseInt(original_price);
    const originalPrice = a.toLocaleString('en-IN')
    const convert = parseInt(stockQuantity);
    const b = parseInt(resale_price);
    const resalePrice = b.toLocaleString('en-IN')
    // handle report function
    const handleReportToAdmin = (_id) => {
        const reportedItem = {
            name: name,
            img: img,
            item_id: _id,
            time: moment().format('lll'),
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
                    toast.success('Report Done', {
                        position: toast.POSITION.TOP_RIGHT,
                        className: 'toast-message'
                    });
                    setDisable(true)
                }
                else {
                    toast("Something Went Wrong!");
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <Col md={6} lg={4}>
            <Card className='p-2 card my-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img variant="top" className='w-100 rounded ' src={img} style={{ height: '250px' }} />
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title className='fw-bold' style={{ textTransform: 'uppercase' }}>{name}</Card.Title>
                    <h6>
                        <p className=''><img className='locImg' src={loc} alt="" /> {location}</p>
                        <p className=''>Original Price:<span></span> $ {originalPrice}</p>
                        <p className=''>Resale Price:<span></span> $ {resalePrice}</p>
                        <p className=''>Condition:<span></span> {condition}</p>
                        <p className=''>Year of Use:<span></span> {years_of_use} yr/yrs</p>
                        <div>
                            <p className='' style={{ fontWeight: 'bold', textTransform: 'capitalize' }}><span><img className='locImg' style={{ height: '50px', width: '50px', borderRadius: '30px', border: '3px solid #6B43FB' }} src={seller_image} alt="" /></span> {seller_name} {
                                (seller_verify === 'false') ? <img className='locImg' style={{ height: '20px', width: '20px', marginLeft: '10px' }} src={badge} alt="" />
                                    : ''
                            }
                            </p>
                            <p className=''>Posted On: <span>{time}</span></p>
                        </div>
                    </h6>
                    <div className='d-flex justify-content-between'>
                        <BookNow data={data}></BookNow>
                        <Button className='w-100' style={{ backgroundColor: '#6B43FB', width: '100px', height: '40px', fontSize: '1rem', border: 'none' }} disabled={disable} onClick={() => handleReportToAdmin(_id)}>Report</Button>
                    </div>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Col>
    );
};

export default AllCarsCard;