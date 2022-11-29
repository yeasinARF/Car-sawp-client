import React from 'react';
import { Container, Row} from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllBuyersCard from './AllBuyersCard/AllBuyersCard';

const AllBuyers = () => {
    const data = useLoaderData()
    return (
        <Container>
            <Row className='g-3'>
                <AllBuyersCard></AllBuyersCard>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default AllBuyers;