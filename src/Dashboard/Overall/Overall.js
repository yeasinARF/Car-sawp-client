import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import OverallCard from './OverallCard/OverallCard';
import useRole from '../../useRole';
import { AuthContext } from '../../Utilities/Context/UserContext';
import seller from '../../Images/group.png';
import report from '../../Images/items.png';
import products from '../../Images/sugar-cubes.png';
import orders from '../../Images/checkout.png';
import brands from '../../Images/brand-image.png';
import LoaderSpin from '../../Utilities/Context/Loader/LoaderSpin';


const Overall = () => {
    const { user, loader } = useContext(AuthContext);
    const [currentUser] = useRole(user);
    const [currentUsers, setUsers] = useState([]);
    const [currentBrand, setBrands] = useState([]);
    const [currentProduct, setProducts] = useState([]);
    const [currentOrder, setOrders] = useState([]);
    const [currentReport, setReports] = useState([]);
    const [currentAdvertise, setAdvertises] = useState([]);
    const [currentReportedItems, setReportedItems] = useState([]);
    //top product filter 
    

    const values = currentProduct.map(d => parseInt(d.resale_price))
    const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    useEffect(() => {
        fetch(`http://localhost:5000/categories/${user?.email}`)
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/products/${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/customerOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/reportedItems')
            .then(res => res.json())
            .then(data => setReports(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => setAdvertises(data))
    }, [])
    return (
        <Container>
            <Row className='g-3'>
                {
                    currentUser === 'admin' &&
                    <>
                        <Col md={4} lg={4} >
                            <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(190, 190, 205)", backgroundColor: "#6B43FB", color: 'white', border: 'none' }} >

                                <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                    <img className=' rounded ' src={seller} alt="" style={{ height: '45px', width: '45px', marginTop: '15px', marginRight: '8px', fontWeight: 'bolder' }} />
                                    <Card.Body>
                                        <Card.Title className='fw-bold' style={{ fontSize: '1rem' }}>Total Users</Card.Title>
                                        <p className=''>{currentUsers.length}</p>

                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} lg={4} >
                            <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(190, 190, 205)", backgroundColor: "#6B43FB", color: 'white', border: 'none' }} >
                                <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                    <img className=' rounded ' src={seller} alt="" style={{ height: '45px', width: '45px', marginTop: '15px', marginRight: '8px', fontWeight: 'bolder' }} />
                                    <Card.Body>
                                        <Card.Title className='fw-bold' style={{ fontSize: '1rem' }}>Total Advertise</Card.Title>
                                        <p className=''>{currentAdvertise.length}</p>

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
                                        <p className=''>{currentReport.length}</p>

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
                                        <p className=''>{currentOrder.length}</p>
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
                                        <p className=''>{currentProduct.length}</p>
                                        {/* <p>Total : ${sum.toLocaleString('en-IN')}</p> */}
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
                                        <p className=''>{currentBrand.length}</p>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    </>
                }
            </Row>
            <Row>
                {
                    currentUser === 'seller' && <>
                        {/* total sell and payment  */}
                        {
                            
                        }
                    </>
                }
            </Row>
        </Container>
    );
};

export default Overall;