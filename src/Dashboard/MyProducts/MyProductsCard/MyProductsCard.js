import moment from 'moment';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EditProduct from './EditProduct/EditProduct';

const MyProductsCard = ({ data, handleDelete }) => {
    const { name, img, _id, resale_price, original_price, status, years_of_use, purchase_year, seller_name, seller_image, stockQuantity, condition } = data;
    const handleAdvertise = () => {
        const advertise = {
            name: name,
            img: img,
            item_id: _id,
            time: moment().format('lll'),
            resale_price: resale_price,
            original_price: original_price,
            years_of_use: years_of_use,
            purchase_year: purchase_year,
            seller_name,
            seller_image,
            status,
            stockQuantity,
            condition,
        }
        fetch('https://car-swap-server.vercel.app/advertise', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(advertise),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Advertise Product Added Successfully");
                }
            });
    }
    return (
        <Col md={6} lg={6}>
            <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <p className=''>Original Price: $ {original_price} </p>
                    <p className=''>Resale Price: $ {resale_price} </p>
                    <p>Available Quantity: {stockQuantity} pc</p>
                    <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                        {
                            stockQuantity > 5 ?

                                <Button onClick={handleAdvertise} className='mt-2' style={{ backgroundColor: '#6B43FB', width: '250px', height: '35px', fontSize: '0.9rem', border: 'none' }}>Advertise</Button>
                                : <Button className='mt-2' style={{ backgroundColor: '#6B43FB', width: '250px', height: '35px', fontSize: '0.9rem', border: 'none' }} disabled>Out of stock</Button>
                        }
                        <EditProduct data={data} ></EditProduct>
                        <span onClick={() => handleDelete(_id)} className='  fw-bold fs-3' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer' }}></FaTrashAlt></span>
                    </div>

                </Card.Body>
            </Card>
            <ToastContainer />
        </Col>
    );
};

export default MyProductsCard;