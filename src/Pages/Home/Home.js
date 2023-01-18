import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerOne from '../../Images/undraw_By_my_car_re_eyri.png';
import './Home.css';
import Categories from './Categories/Categories';
import AdItem from '../../AdItem/AdItem';

const Home = () => {
    const [categorie,setCategorie]=useState([]);
    useEffect(()=>{
        fetch('https://car-swap-server.vercel.app/Categories')
        .then(res=>res.json())
        .then(data=>setCategorie(data))
    },[])
    return (
        <Container>
            <Container>
                <Row>
                    <Col md={6} lg={6}>
                        <div className='description'>
                            <h1 className='text-black headingTitle pt-4 pb-2 mt-4 mb-2'>#1<br /> Buying & Selling Used Car Platform</h1>
                            <p className='text-gray fs-5'>Here, Seller can sell their used car & <br /> Buyer can buy used car in best price.</p>
                            <Button className='px-4 py-2 my-4 fw-bold' variant="primary"><Link className='ExploreButtonLink text-white text-decoration-none' to='/allcars' >Explore</Link></Button>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className='text-center'>
                            <img className='img-fluid' src={bannerOne} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='text-black text-center my-5'>
                <h1 className='py-5'>Why Trust Us?</h1>
                <Row className='g-3'>
                    <Col md={3} lg={3}>
                        <Card className='p-2 card'><h5>50+ Premier Brands</h5></Card>
                    </Col>
                    <Col md={3} lg={3}>
                        <Card className='p-2 card'><h5>80K+ Perfect Cars</h5></Card>
                    </Col>
                    <Col md={3} lg={3}>
                        <Card className='p-2 card'><h5>145k+ Happy Users</h5></Card>
                    </Col>
                    <Col md={3} lg={3}>
                        <Card className='p-2 card'><h5>2K+ Total Registrations</h5></Card>
                    </Col>
                </Row>
            </Container>
            <Container  className='text-black text-center my-5'>
                <AdItem></AdItem>
            </Container>
            <Container className='text-black text-center my-5'>
                <h1 className='py-5'>Browse Brands</h1>
                <Row className='g-3'>
                    {
                        categorie.map(data=><Categories data={data} key={data._id}></Categories>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Home;