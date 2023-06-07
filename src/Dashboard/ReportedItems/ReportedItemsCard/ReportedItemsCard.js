import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const ReportedItemsCard = ({ data, handleDelete }) => {
    const { name, img, _id, item_id } = data;

    return (
        <Col md={6} lg={6}>
            <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <Button className='mt-3' style={{ height: '35px', width: '100px', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#6B43FB' }}>Review</Button>
                        <span onClick={() => handleDelete(_id, item_id)} className='px-2 py-2 fw-bold fs-3' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer' }}></FaTrashAlt></span>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ReportedItemsCard;