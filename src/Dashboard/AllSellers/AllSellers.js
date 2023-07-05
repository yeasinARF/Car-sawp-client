import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllSellersCard from './AllSellersCard/AllSellersCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const AllSellers = () => {
    const data = useLoaderData()
    const [currentSellers, setCurrentSellers] = useState(data);

    // console.log(currentSeller);
    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure to delete this seller ?');
        if (proceed) {
            fetch(`https://car-swap-server.vercel.app/users/seller/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast("Deleted Successfully");
                        const remaining = currentSellers.filter(seller => seller._id !== _id)
                        setCurrentSellers(remaining);
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
                    currentSellers.length === 0 ? <p className='text-center fw-bold py-3 text-black'>No Seller Found!</p>
                        : currentSellers.map((data, i) => <AllSellersCard handleDelete={handleDelete} i={i}  data={data} key={data._id}></AllSellersCard>)
                }
            </table>

            <ToastContainer />

        </Container>
    );
};

export default AllSellers;