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
                        const remaining = currentBuyers.filter(buyer => buyer._id !== _id)
                        setCurrentBuyers(remaining);
                    }
                })
        }
    }
    return (
        <Container className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>

                        <th style={{ fontSize: '0.9rem' }}>#</th>
                        {/* <th>
                            <label>
                                <input type="checkbox" onClick={handleClick} checked={check} className="checkbox" />
                            </label>
                        </th> */}
                        <th style={{ fontSize: '0.9rem' }}>Name</th>
                        <th style={{ fontSize: '0.9rem' }}>Email</th>
                        {/* <th style={{ fontSize: '0.9rem', }}>{view === 'block' ? <FaTrashAlt onClick={handleAllDelete}style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer', display: view }}></FaTrashAlt> : 'Action'}</th> */}



                    </tr>
                </thead>
                {
                    currentBuyers.length === 0 ? <p className='text-center fw-bold py-3 text-black'>No Seller Found!</p>
                        : currentBuyers.map((data, i) => <AllBuyersCard handleDelete={handleDelete} i={i} data={data} key={data._id}></AllBuyersCard>)
                }
            </table>

            <ToastContainer />

        </Container>
    );
};

export default AllBuyers;