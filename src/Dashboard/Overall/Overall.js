import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import OverallCard from './OverallCard/OverallCard';

const Overall = () => {

    const [currentSellers, setSellers] = useState([]);
    const [currentBuyers, setBuyers] = useState([]);
    const [currentReportedItems, setReportedItems] = useState([]);
    useEffect(() => {
        fetch('https://car-swap-server.vercel.app/Categories')
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [])
    return (
        <Container>
            <Row className='g-3'>
                    <OverallCard></OverallCard>
            </Row>
        </Container>
    );
};

export default Overall;