import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import IndividualProductCard from './IndividualProductCard/IndividualProductCard';




const IndividualProduct = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <Container>

            {
                data.map(data => <IndividualProductCard data={data} key={data._id}></IndividualProductCard>)
            }

        </Container>
    );
};

export default IndividualProduct;