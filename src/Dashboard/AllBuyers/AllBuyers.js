import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllBuyersCard from './AllBuyersCard/AllBuyersCard';

const AllBuyers = () => {
    const data = useLoaderData()
    const [currentBuyers, setCurrentBuyers] = useState(data);
    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure to delete this buyer ?');
        if (proceed) {
            fetch(`https://car-swap-server.vercel.app/users/seller/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast("Deleted Successfully");
                        const remaining = currentBuyers.filter(buyer =>buyer._id !== _id)
                        setCurrentBuyers(remaining);
                    }
                })
        }
    }
    return (
        <Container>
            <Row className='g-3'>
                {currentBuyers.map(data=><AllBuyersCard handleDelete={handleDelete} data={data} key={data._id}></AllBuyersCard>)}
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default AllBuyers;