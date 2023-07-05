import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import MyOrdersCard from '../MyOrders/MyOrdersCard/MyOrdersCard';
import CustomerOrderCard from './CustomerOrderCard/CustomerOrderCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookNow from '../../BookNow/BookNow';

const CustomerOrder = () => {
    const data = useLoaderData();
    const [currentOrder, setCurrentOrder] = useState(data);
    console.log(data);
    //single delete
    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure to delete this Items ?');
        if (proceed) {
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = currentOrder.filter(item => item._id !== _id)
                        setCurrentOrder(remaining);
                        toast.success('Deleted this Successfully!')
                    }
                })

        }
    }
    return (
        <Container>
            <table className="table">
                {/* head */}
                <thead>
                    <tr style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>

                        <th style={{ fontSize: '0.8rem' }}>#</th>
                        {/* <th>
                            <label>
                                <input type="checkbox" onClick={handleClick} checked={check} className="checkbox" />
                            </label>
                        </th> */}
                        <th style={{ fontSize: '0.8rem' }}>Invoice Number</th>
                        <th style={{ fontSize: '0.8rem' }}>Date</th>
                        <th style={{ fontSize: '0.8rem' }}>Customer</th>
                        <th style={{ fontSize: '0.8rem' }}>Sub Total</th>
                        
                        <th style={{ fontSize: '0.8rem' }}>Payment</th>
                        <th style={{ fontSize: '0.8rem' }}>Delivery</th>
                        <th style={{ fontSize: '0.8rem' }}>Action</th>
                        {/* <th style={{ fontSize: '0.9rem', }}>{view === 'block' ? <FaTrashAlt onClick={handleAllDelete}style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer', display: view }}></FaTrashAlt> : 'Action'}</th> */}



                    </tr>
                </thead>
                {
                    currentOrder.length === 0 ? <p className='text-center fw-bold py-3 text-black'>No Order Yet!</p>
                        : currentOrder.map((data, i) => <CustomerOrderCard handleDelete={handleDelete} i={i}  data={data} key={data._id}></CustomerOrderCard>)
                }
            </table>

            <ToastContainer />
        </Container>
    );
};

export default CustomerOrder;