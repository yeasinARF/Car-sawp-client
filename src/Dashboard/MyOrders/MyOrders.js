import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import MyOrdersCard from './MyOrdersCard/MyOrdersCard';

const MyOrders = () => {
    const data = useLoaderData();
    const [currentProducts, setCurrentProducts] = useState(data);
    console.log(data);
    return (
        <Container>
            <Row className='g-3'>
                {
                    currentProducts.length === 0 ? <p className='text-center fw-bold py-3 text-black'>You have no Ordered Product!</p>
                        : currentProducts.map(data => <MyOrdersCard data={data} key={data._id}></MyOrdersCard>)
                }
            </Row>
        </Container>
    );
};

export default MyOrders;