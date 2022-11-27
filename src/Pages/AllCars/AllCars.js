import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllCarsCard from './AllCarsCard/AllCarsCard';

const AllCars = () => {
    const data=useLoaderData();
    return (
        <Container>
            <Row className='g-3'>
                {
                    data.map(data => <AllCarsCard data={data} key={data._id}></AllCarsCard>)
                }
            </Row>
        </Container>
    );
};

export default AllCars;