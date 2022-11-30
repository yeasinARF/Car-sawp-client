import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyProductsCard = ({ data, handleDelete }) => {
    const { name, img, _id, resale_price, original_price, status, years_of_use, purchase_year } = data;
    const handleAdvertise = () => {
        const advertise = {
            name: name,
            img: img,
            item_id: _id,
            time: new Date(),
            resale_price: resale_price,
            original_price: original_price,
            years_of_use: years_of_use,
            purchase_year: purchase_year,
            status,
        }
        fetch('http://localhost:5000/advertise', {
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
        <Col md={6} lg={4}>
            <Card className='p-2 card mb-3 cardProduct'>
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <p className=''>Original Price: {original_price} Taka</p>
                    <p className=''>Resale Price: {resale_price} Taka</p>
                    <p className=''>Availability: {status}</p>
                    {
                        status === 'available' ? <Button onClick={handleAdvertise} variant="primary">Advertise</Button>
                            : <Button variant="primary" disabled>Advertise</Button>
                    }
                    <span onClick={() => handleDelete(_id)} className='mx-auto px-2 py-2 fw-bold fs-3' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer' }}></FaTrashAlt></span>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Col>
    );
};

export default MyProductsCard;