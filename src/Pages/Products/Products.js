import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';
import { AuthContext } from '../../Utilities/Context/UserContext';

const Products = () => {
    const data = useLoaderData();


    console.log(data);
    return (
        <Container>
            <Row className='g-3'>
                {
                    data.map(data => <ProductCard data={data} key={data._id}></ProductCard>)

                }
            </Row>
        </Container>
    );
};

export default Products;