import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllCategoriesCard from './AllCategoriesCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllCategories = () => {
    const data = useLoaderData();
    const [currentBrand, setCurrentBrand] = useState(data);
    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure to delete this Items ?');
        if (proceed) {
            fetch(`http://localhost:5000/categories/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = currentBrand.filter(item => item._id !== _id)
                        setCurrentBrand(remaining);
                        toast('Successfully Deleted!')
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

                        <th style={{ fontSize: '0.8rem' }}>#</th>
                        {/* <th>
                            <label>
                                <input type="checkbox" onClick={handleClick} checked={check} className="checkbox" />
                            </label>
                        </th> */}
                        <th style={{ fontSize: '0.8rem' }}>Name</th>
                        <th style={{ fontSize: '0.8rem' }}>Logo</th>
                        <th style={{ fontSize: '0.8rem' }}>Action</th>
                        {/* <th style={{ fontSize: '0.9rem', }}>{view === 'block' ? <FaTrashAlt onClick={handleAllDelete}style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer', display: view }}></FaTrashAlt> : 'Action'}</th> */}



                    </tr>
                </thead>
                {
                    currentBrand.length === 0 ? <p className='text-center fw-bold py-3 text-black'>No Order Yet!</p>
                        : currentBrand.map((data, i) => <AllCategoriesCard handleDelete={handleDelete} i={i} data={data} key={data._id}></AllCategoriesCard>)
                }
            </table>

            <ToastContainer />

        </Container>
    );
};

export default AllCategories;