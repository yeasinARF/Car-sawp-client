import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";



const AllSellersCard = ({ data, handleDelete }) => {
    const { name, img, email, _id } = data;
    return (
        <Col md={6} lg={6} className='mx-auto'>
            <Card className='p-1 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none',  }}>

                <Card.Body>
                    
                    <p className='' style={{ textTransform: 'capitalize' }}><img className='' style={{height:'40px',width:'40px',borderRadius:'30px'}} src={img} alt="" /><span className='fw-bold ps-2'>Name: </span>{name}</p>
                    <p style={{ fontSize: '0.9rem' }}><span className='fw-bold'>Email: </span>{email}</p>
                    <div className='d-flex justify-content-between'>
                        <Button className='mt-2' style={{ height: '35px', width: '150px', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#6B43FB' }}>View Details</Button>
                        <Button className='mt-2' style={{ height: '35px', width: '80px', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#6B43FB' }}>Verify</Button>
                        <span onClick={() => handleDelete(_id)} className='px-2 py-2 fw-bold fs-3' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer',marginTop:'-12px' }}></FaTrashAlt></span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllSellersCard;