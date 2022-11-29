import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllSellersCard from './AllSellersCard/AllSellersCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllSellers = () => {
    const data=useLoaderData()
    const [currentSeller, setCurrentSeller] = useState(data);
    // console.log(currentSeller);
    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure to delete this seller ?');
        if (proceed) {
            fetch(`http://localhost:5000/users/seller/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast("Deleted Successfully");
                        const remaining =currentSeller.filter(seller => seller._id !== _id)
                        setCurrentSeller(remaining);
                    }
                })
        }
    }
    return (
        <Container>
            <Row className='g-3'>
                {
                    currentSeller.map(data=><AllSellersCard handleDelete={handleDelete} data={data} key={data._id}></AllSellersCard>)
                }
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default AllSellers;