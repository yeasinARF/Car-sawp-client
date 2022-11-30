import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AdItemCard from './AdItemCard/AdItemCard';


const AdItem = () => {
    const [ad, setAd] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/advertise')
            .then(res => res.json())
            .then(data => setAd(data))
    }, [])
    return (
        <Container>
            <h1>Featured Product</h1>
            <Row className='g-3'>
                {
                    ad.length !== 0 ? ad.map(data => <AdItemCard data={data} key={data._id}></AdItemCard>)
                        : <p className='d-none'></p>
                }
            </Row>
        </Container>
    );
};

export default AdItem;