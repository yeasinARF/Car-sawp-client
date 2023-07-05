import React, { useContext } from 'react';
import BookNow from '../../../BookNow/BookNow';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../../Utilities/Context/UserContext';
import edit from '../../../Images/edit.png';
import UserUpdate from '../../UserUpdate/UserUpdate.js';


const MyProfileCard = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <Container>
            <Row>
                <Col lg={10} className='mx-auto '>
                    <Card className='p-2 card mb-4 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                        <div className='text-center'><img variant="top" style={{ height: '150px', width: '150px', borderRadius: '50%', border: '3px solid #6B43FB' }} src={user.photoURL} alt='' /></div>
                        <Card.Body>
                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <div>
                                    <p><span className='fw-bold'>Name:</span> {user?.displayName}</p>
                                    <p><span className='fw-bold'>Email:</span> {user?.email}</p>
                                </div>
                                <div>
                                    <span className='  fw-bold fs-3' style={{ cursor: 'pointer' }} ><img className='' src={edit} style={{ height: '33px', width: '33px' }} alt="" /></span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MyProfileCard;