import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllCategoriesCard from './AllCategoriesCard';

const AllCategories = () => {
    const data = useLoaderData();
    const [currentBrand, setCurrentBrand] = useState(data);
    return (
        <Container>
            <Row className='g-3'>
                {
                    currentBrand.length === 0 ? <p className='text-center fw-bold py-3 text-black'>Brand is empty!</p>
                        : currentBrand.map(data => <AllCategoriesCard data={data} key={data._id}></AllCategoriesCard>)
                }
            </Row>
        </Container>
    );
};

export default AllCategories;