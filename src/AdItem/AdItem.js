import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import AdItemCard from './AdItemCard/AdItemCard';
import { Link } from 'react-router-dom';


const AdItem = () => {
    const [ad, setAd] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => setAd(data))
    }, [])
    return (
        <Container>
            <h1 style={{color:'black'}}>Choose Your Dream Car</h1>
            <Row className='g-3'>
                {
                    ad.length !== 0 ? ad.map(data => <AdItemCard data={data} key={data._id}></AdItemCard>)
                        : <p className='d-none'> There are no product to AD!</p>
                }
            </Row>
            <Link className='ExploreButtonLink text-white text-decoration-none' to='/allcars' ><Button className='px-4 py-2 my-4 fw-bold' style={{ backgroundColor: '#6B43FB', width: '180px', height: '50px', fontSize: '1.2rem', border:'none' }}>Show More</Button></Link>
        </Container>
    );
};

export default AdItem;