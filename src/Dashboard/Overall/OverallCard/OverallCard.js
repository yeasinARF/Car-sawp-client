import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import useRole from '../../../useRole';
import { AuthContext } from '../../../Utilities/Context/UserContext';
import seller from '../../../Images/group.png';
import report from '../../../Images/items.png';
import products from '../../../Images/sugar-cubes.png';
import orders from '../../../Images/checkout.png';
import brands from '../../../Images/brand-image.png';


const OverallCard = () => {

    const { user } = useContext(AuthContext);
    const [currentUser] = useRole(user);
    return (
        <>
            {
                currentUser === 'admin' &&
                <>
                    <Col md={4} lg={4} >
                        <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(190, 190, 205)", backgroundColor: "#6B43FB", color: 'white', border: 'none' }} >

                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <img className=' rounded ' src={seller} alt="" style={{ height: '45px', width: '45px', marginTop: '15px', marginRight: '8px', fontWeight: 'bolder' }} />
                                <Card.Body>
                                    <Card.Title className='fw-bold' style={{ fontSize: '1rem' }}>Total Sellers</Card.Title>
                                    <p className=''>0</p>

                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} lg={4} >
                        <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(190, 190, 205)", backgroundColor: "#6B43FB", color: 'white', border: 'none' }} >
                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <img className=' rounded ' src={seller} alt="" style={{ height: '45px', width: '45px', marginTop: '15px', marginRight: '8px', fontWeight: 'bolder' }} />
                                <Card.Body>
                                    <Card.Title className='fw-bold' style={{ fontSize: '1rem' }}>Total Buyers</Card.Title>
                                    <p className=''>0</p>

                                </Card.Body>
                            </div>

                        </Card>
                    </Col>
                    <Col md={4} lg={4} >
                        <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(190, 190, 205)", backgroundColor: "#6B43FB", color: 'white', border: 'none' }} >
                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <img className=' rounded ' src={report} alt="" style={{ height: '45px', width: '45px', marginTop: '15px', marginRight: '8px', fontWeight: 'bolder' }} />
                                <Card.Body>
                                    <Card.Title className='fw-bold' style={{ fontSize: '1rem' }}>Reported Items</Card.Title>
                                    <p className=''>0</p>

                                </Card.Body>
                            </div>

                        </Card>
                    </Col>
                </>
            }
            {
                currentUser === 'seller' && <>

                    <Col md={10} lg={4} className='mx-auto'>
                        <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(190, 190, 205)", backgroundColor: "#6B43FB", color: 'white', border: 'none' }} >
                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <img className=' rounded ' src={orders} alt="" style={{ height: '45px', width: '45px', marginTop: '15px', marginRight: '8px', fontWeight: 'bolder' }} />
                                <Card.Body>
                                    <Card.Title className='fw-bold' style={{ fontSize: '1rem' }}>Total Orders</Card.Title>
                                    <p className=''>0</p>

                                </Card.Body>
                            </div>


                        </Card>
                    </Col>
                    <Col md={10} lg={4} className='mx-auto'>
                        <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(190, 190, 205)", backgroundColor: "#6B43FB", color: 'white', border: 'none' }} >
                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <img className=' rounded ' src={products} alt="" style={{ height: '45px', width: '45px', marginTop: '15px', marginRight: '8px', fontWeight: 'bolder' }} />
                                <Card.Body>
                                    <Card.Title className='fw-bold' style={{ fontSize: '1rem' }}>Total Products</Card.Title>
                                    <p className=''>0</p>

                                </Card.Body>
                            </div>

                        </Card>
                    </Col>
                    <Col md={10} lg={4} className='mx-auto'>
                        <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(190, 190, 205)", backgroundColor: "#6B43FB", color: 'white', border: 'none' }} >
                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <img className=' rounded ' src={brands} alt="" style={{ height: '45px', width: '45px', marginTop: '15px', marginRight: '8px', fontWeight: 'bolder' }} />
                                <Card.Body>
                                    <Card.Title className='fw-bold' style={{ fontSize: '1rem' }}>Total Brands</Card.Title>
                                    <p className=''>0</p>

                                </Card.Body>
                            </div>

                        </Card>
                    </Col>
                </>
            }


        </>

    );
};

export default OverallCard;