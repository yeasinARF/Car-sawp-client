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
            fetch(`https://car-swap-server.vercel.app/reportedItems/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = currentItems.filter(item => item._id !== _id)
                        setCurrentItems(remaining);
                        fetch(`https://car-swap-server.vercel.app/car/${item_id}`, {
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
            <h5 style={{boxShadow:"2px 2px 10px 4px rgb(211, 211, 211)",backgroundColor:"rgb(227, 227, 227)",border:'none',width:'120px',borderRadius:'5px',padding:'5px'}} ><span style={{color:'#6B43FB'}}>Total:</span> {currentItems.length}</h5>
            <Row className='g-3 my-1'>
                {currentItems.map(data => <ReportedItemsCard handleDelete={handleDelete} data={data} key={data._id}></ReportedItemsCard>)}
            </Row>
            <ToastContainer />
            <ToastContainer />
        </Container>
    );
};

export default ReportedItems;