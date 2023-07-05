import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Carousel, CarouselItem, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerOne from '../../Images/car-1.png';
import bannerTwo from '../../Images/car-seller.png'
import bannerThree from '../../Images/buy.png'
import man2 from '../../Images/men-2.jpg';
import man3 from '../../Images/men-3.jpg';
import man4 from '../../Images/men-4.jpg';
import './Home.css';
import Categories from './Categories/Categories';
import AdItem from '../../AdItem/AdItem';
import bg from '../../Images/bg.jpg'
import AllCars from '../AllCars/AllCars';
import AllSellersCard from '../../Dashboard/AllSellers/AllSellersCard/AllSellersCard';
import useRole from '../../useRole';
import { AuthContext } from '../../Utilities/Context/UserContext';
import contactImage from '../../Images/contact.png';
import Contact from '../../Contact/Contact';


const Home = () => {
    const [categorie, setCategorie] = useState([]);
    const { user } = useContext(AuthContext);
    const [currentUser] = useRole(user);

    useEffect(() => {
        fetch('https://car-swap-server.vercel.app/Categories')
            .then(res => res.json())
            .then(data => setCategorie(data))
    }, [])


    return (
        <Container>
            {
                (currentUser === 'seller') ? <>

                    <Container>
                        <Row className='my-3'>
                            <Col md={6} lg={5}>
                                <div className='description'>
                                    <h1 className=' pt-4 pb-2 mt-4 mb-2' style={{ color: 'black', fontWeight: 'bold' }}>Just few steps to sell used car</h1>
                                    <p className='text-gray fs-5 py-4'><small>Top used car selling platform. We will help you to sell used car through our platform.</small></p>
                                    <Link className='ExploreButtonLink text-white text-decoration-none' to='dashboard' ><Button className='px-4 py-2 my-4 fw-bold' style={{ backgroundColor: '#E3E3E3', color: '#6B43FB', width: '130px', height: '50px', fontSize: '1rem', border: '2px solid #6B43FB ' }}>Sell Now</Button></Link>

                                </div>
                            </Col>
                            <Col md={6} lg={7}>
                                <div className='text-center sellLeftSide ' >
                                    <img className='img-fluid rounded bannerImg d-md-block d-none' src={bannerTwo} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Container className=' text-center my-5' style={{ color: 'black' }}>
                            <h1 className='py-5'>Why Our Platform?</h1>
                            <Row className='g-3'>
                                <Col md={3} lg={3}>
                                    <Card className='p-2 card cd border-0' style={{ backgroundColor: '#7D43FB', color: 'white' }}><h5 style={{ paddingTop: '10px' }}>1M+ Happy Customers</h5></Card>
                                </Col>
                                <Col md={3} lg={3}>
                                    <Card className='p-2 card cd border-0' style={{ backgroundColor: '#7D43FB', color: 'white' }}><h5 style={{ paddingTop: '10px' }}>Direct Bank Transfer</h5></Card>
                                </Col>
                                <Col md={3} lg={3}>
                                    <Card className='p-2 card cd border-0' style={{ backgroundColor: '#7D43FB', color: 'white' }}><h5 style={{ paddingTop: '10px' }}>Provide Best Price</h5></Card>
                                </Col>
                                <Col md={3} lg={3}>
                                    <Card className='p-2 card cd border-0' style={{ backgroundColor: '#7D43FB', color: 'white' }}><h5 style={{ paddingTop: '10px' }}>Free Registration</h5></Card>
                                </Col>
                            </Row>
                        </Container>
                        <Container className='mb-4'>
                            <Carousel>
                                <CarouselItem>
                                    <Row>
                                        <Col md={6} lg={6}>
                                            <div className='text-center mt-4 pt-3'>
                                                <img className=' rounded' style={{ width: '380px', height: '350px', boxShadow: '2px 2px 10px 4px rgb(211, 211, 211)' }} src={man3} alt="" />
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6}>
                                            <div className='description'>
                                                <h1 className='  pt-4 pb-2 mt-4 mb-2' style={{ color: 'black' }}>Our Sellers Feedback</h1>
                                                <p className='text-gray fs-5'>"One of the most trusted platform."</p>

                                                <p className='mt-5' style={{ fontWeight: '700' }}>Alex Jhon</p>
                                                <small>CEO of Pen Co. Ltd.</small>
                                            </div>
                                        </Col>

                                    </Row>
                                </CarouselItem>
                                <CarouselItem>
                                    <Row>
                                        <Col md={6} lg={6}>
                                            <div className='text-center mt-4 pt-3'>
                                                <img className=' rounded' style={{ width: '380px', height: '350px', boxShadow: '2px 2px 10px 4px rgb(211, 211, 211)' }} src={man4} alt="" />
                                            </div>
                                        </Col>
                                        <Col md={6} lg={6}>
                                            <div className='description'>
                                                <h1 className='  pt-4 pb-2 mt-4 mb-2' style={{ color: 'black' }}>Our Sellers Feedback</h1>
                                                <p className='text-gray fs-5'>"This the best used car platform. I love their service. In addition, they are so cooperative."</p>
                                                <p className='mt-5' style={{ fontWeight: '700' }}>Steve Smith</p>
                                                <small>CEO of Mongo Co. Ltd.</small>
                                            </div>
                                        </Col>

                                    </Row>
                                </CarouselItem>
                            </Carousel>
                        </Container>
                    </Container>
                </>
                    :
                    <>
                        <Container>
                            <Container>
                                <Row>
                                    <Col md={6} lg={5}>
                                        <div className='description'>
                                            <h1 className='  pt-4 pb-2 mt-4 mb-2' style={{ color: 'black', fontWeight: 'bold' }}>Easy way & Fast way to buy & sell used car</h1>
                                            <p className='text-gray fs-5 py-4'><small>We will help you sell or buy your dream car through our platform.</small></p>
                                            <div className='d-flex me-5' style={{ justifyContent: 'space-between' }}>
                                                <Link className='ExploreButtonLink text-white text-decoration-none' to='/allcars' ><Button className='px-4 py-2 my-4 fw-bold' style={{ backgroundColor: '#E3E3E3', color: '#6B43FB', width: '150px', height: '50px', fontSize: '1rem', border: '2px solid #6B43FB ' }}>Book Now</Button></Link>
                                                <Link className='ExploreButtonLink text-white text-decoration-none ms-2' to='/register' ><Button className='px-4 py-2 my-4 fw-bold' style={{ backgroundColor: '#6B43FB', width: '150px', height: '50px', fontSize: '1rem', border: 'none' }}>Sell Now</Button></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={7}>
                                        <div className='text-center leftSide '>
                                            <img className='img-fluid rounded bannerImg d-md-block d-none' src={bannerOne} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className=' text-center my-5' style={{ color: 'black' }}>
                                <h1 className='py-5'>Why Trust Us?</h1>
                                <Row className='g-3' >
                                    <Col md={3} lg={3}>
                                        <Card className='p-2 card cd border-0' style={{ backgroundColor: '#7D43FB', color: 'white' }}><h5 style={{ paddingTop: '10px' }}>50+ Premier Brands</h5></Card>
                                    </Col>
                                    <Col md={3} lg={3}>
                                        <Card className='p-2 card cd border-0' style={{ backgroundColor: '#7D43FB', color: 'white' }}><h5 style={{ paddingTop: '10px' }}>80K+ Perfect Cars</h5></Card>
                                    </Col>
                                    <Col md={3} lg={3}>
                                        <Card className='p-2 card cd border-0' style={{ backgroundColor: '#7D43FB', color: 'white' }}><h5 style={{ paddingTop: '10px' }}>145k+ Happy Users</h5></Card>
                                    </Col>
                                    <Col md={3} lg={3}>
                                        <Card className='p-2 card cd border-0' style={{ backgroundColor: '#7D43FB', color: 'white' }}><h5 style={{ paddingTop: '10px' }}>2K+ Total Registrations</h5></Card>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className=' text-center my-5' style={{ color: 'black' }}>
                                <h1 className='py-5'>Choose By Makers</h1>
                                <Row className='g-3'>
                                    {
                                        categorie.map(data => <Categories data={data} key={data._id}></Categories>)
                                    }
                                </Row>
                            </Container>
                            <Container className=' text-center my-5' style={{ color: '#6B43FB' }}>
                                <AdItem></AdItem>
                            </Container>

                            {/* hot deal  section
                            <Container className='hotDeal-section'>
                                    <Card>
                                        
                                    </Card>

                            </Container> */}

                            <Container className='mb-4'>
                                <Carousel>
                                    <CarouselItem>
                                        <Row>
                                            <Col md={10} lg={6} className='mx-auto'>
                                                <div className='text-center mt-4 pt-3'>
                                                    <img className=' rounded' style={{ width: '380px', height: '350px', boxShadow: '2px 2px 10px 4px rgb(211, 211, 211)' }} src={man2} alt="" />
                                                </div>
                                            </Col>
                                            <Col md={10} lg={6} className='mx-auto'>
                                                <div className='description'>
                                                    <h1 className='  pt-4 pb-2 mt-4 mb-2' style={{ color: 'black' }}>Our Clients Feedback</h1>
                                                    <p className='text-gray fs-5'>"Few days ago, I bought a car from this platform. At first, I was so confused because there were a lot of online platforms for buying second-hand cars, but I found them as a trusted platform." </p>
                                                    <p className='mt-5' style={{ fontWeight: '700' }}>Alex Martin</p>
                                                    <small>CEO of Tech Co. Ltd.</small>
                                                </div>
                                            </Col>

                                        </Row>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Row>
                                            <Col md={10} lg={6} className='mx-auto'>
                                                <div className='text-center mt-4 pt-3'>
                                                    <img className=' rounded' style={{ width: '380px', height: '350px', boxShadow: '2px 2px 10px 4px rgb(211, 211, 211)' }} src={man3} alt="" />
                                                </div>
                                            </Col>
                                            <Col md={10} lg={6} className='mx-auto'>
                                                <div className='description'>
                                                    <h1 className='  pt-4 pb-2 mt-4 mb-2' style={{ color: 'black' }}>Our Clients Feedback</h1>
                                                    <p className='text-gray fs-5'>"One of the most trusted platform."</p>
                                                    <p className='mt-5' style={{ fontWeight: '700' }}>Alex Jhon</p>
                                                    <small>CEO of Pen Co. Ltd.</small>
                                                </div>
                                            </Col>

                                        </Row>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Row>
                                            <Col md={10} lg={6} className='mx-auto'>
                                                <div className='text-center mt-4 pt-3'>
                                                    <img className=' rounded' style={{ width: '380px', height: '350px', boxShadow: '2px 2px 10px 4px rgb(211, 211, 211)' }} src={man4} alt="" />
                                                </div>
                                            </Col>
                                            <Col md={10} lg={6} className='mx-auto'>
                                                <div className='description'>
                                                    <h1 className='  pt-4 pb-2 mt-4 mb-2' style={{ color: 'black' }}>Our Clients Feedback</h1>
                                                    <p className='text-gray fs-5'>"This the best used car platform. I love their service. In addition, they are so cooperative."</p>
                                                    <p className='mt-5' style={{ fontWeight: '700' }}>Steve Smith</p>
                                                    <small>CEO of Mongo Co. Ltd.</small>
                                                </div>
                                            </Col>

                                        </Row>
                                    </CarouselItem>
                                </Carousel>
                            </Container>
                            <Container className='regBuyer'>
                                <Row style={{ flexDirection: 'row-reverse' }}>
                                    <Col md={10} lg={7} className='mx-auto'>
                                        <div className='text-center '>
                                            <img className='img-fluid rounded' src={bannerThree} alt="" />
                                        </div>
                                    </Col>
                                    <Col md={10} lg={5} className='mx-auto'>
                                        <div className='register'>
                                            <h1 className=' headingTitle ' style={{ color: 'black' }}>Want to buy car?</h1>
                                            <p className='text-gray fs-5 py-4'><small>Buy high quality car at cheap price.</small></p>
                                            <Link className='ExploreButtonLink text-white text-decoration-none' to='/register' ><Button className='px-4 py-2 my-4 fw-bold' style={{ backgroundColor: '#E3E3E3', color: '#6B43FB', width: '180px', height: '50px', fontSize: '1.1rem', border: '2px solid #6B43FB ' }}>Register Now</Button></Link>
                                        </div>
                                    </Col>

                                </Row>
                            </Container>
                            <div className='car-sell-banner my-5' style={{ backgroundImage: `url(${bg})` }}>
                                <div>
                                    <p>Need to sell your car?</p>
                                    <h3>We are here to help you.</h3>
                                </div>
                                <div className='py-3'>
                                    <Link to='/register'><Button className='px-4 py-2 my-4 fw-bold' style={{ backgroundColor: '#6B43FB', width: '220px', height: '50px', fontSize: '1.2rem', border: 'none' }}>Become a seller</Button></Link>
                                </div>
                            </div>


                        </Container>
                        {/* contact section  */}
                        <Contact></Contact>
                    </>
            }
        </Container>
    );
};

export default Home;