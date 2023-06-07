import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import MyOrdersCard from '../MyOrders/MyOrdersCard/MyOrdersCard';
import CustomerOrderCard from './CustomerOrderCard/CustomerOrderCard';

const CustomerOrder = () => {
    const data = useLoaderData();
    const [currentProducts, setCurrentProducts] = useState(data);
    console.log(data);
    return (
        <Container>
            <Row className='g-3'>
                {
                    currentProducts.length === 0 ? <p className='text-center fw-bold py-3 text-black'>No Order Yet!</p>
                        : currentProducts.map(data => <CustomerOrderCard data={data} key={data._id}></CustomerOrderCard>)
                }
            </Row>
        </Container>
    );
};

export default CustomerOrder;