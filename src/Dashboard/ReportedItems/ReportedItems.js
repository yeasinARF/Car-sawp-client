import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReportedItemsCard from './ReportedItemsCard/ReportedItemsCard';

const ReportedItems = () => {
    const data = useLoaderData();
    console.log(data);
    const [currentItems, setCurrentItems] = useState(data);
    const handleDelete = (_id, item_id) => {
        const proceed = window.confirm('Are you sure to delete this Items ?');
        if (proceed) {
            fetch(`http://localhost:5000/reportedItems/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = currentItems.filter(item => item._id !== _id)
                        setCurrentItems(remaining);
                        fetch(`http://localhost:5000/car/${item_id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)

                            })
                            toast('Deleted this Successfully!')
                    }
                })

        }
    }
    return (
        <Container>
            <Row className='g-3'>
                {currentItems.map(data => <ReportedItemsCard handleDelete={handleDelete} data={data} key={data._id}></ReportedItemsCard>)}
            </Row>
            <ToastContainer />
            <ToastContainer />
        </Container>
    );
};

export default ReportedItems;