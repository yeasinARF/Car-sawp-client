import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProductsCard from './MyProductsCard/MyProductsCard';
import empty from '../../Images/empty.png'


const MyProducts = () => {
    const data = useLoaderData();
    console.log(data);
    const [currentProducts, setCurrentProducts] = useState(data);
    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure to delete this Items ?');
        if (proceed) {
            fetch(`https://car-swap-server.vercel.app/car/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = currentProducts.filter(item => item._id !== _id)
                        setCurrentProducts(remaining);
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
                        <th style={{ fontSize: '0.8rem' }}>Item Code</th>
                        <th style={{ fontSize: '0.8rem' }}>Product</th>
                        <th style={{ fontSize: '0.8rem' }}>Stock Qty.</th>
                        <th style={{ fontSize: '0.8rem' }}>Purchase Price</th>
                        <th style={{ fontSize: '0.8rem' }}>Sale Price</th>
                        <th style={{ fontSize: '0.8rem' }}>Action</th>

                        {/* <th style={{ fontSize: '0.8rem' }}>Payment</th>
                        <th style={{ fontSize: '0.8rem' }}>Delivery</th>
                        
                        {/* <th style={{ fontSize: '0.9rem', }}>{view === 'block' ? <FaTrashAlt onClick={handleAllDelete}style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer', display: view }}></FaTrashAlt> : 'Action'}</th> */}



                    </tr>
                </thead>
                {/* map on array data  */}
                {
                    currentProducts.length === 0 ? <p className='my-3 text-center fw-bold' style={{ fontSize: '0.8rem', color: 'red' }}>You have no product!</p>
                        : currentProducts.map((data, i) => <MyProductsCard handleDelete={handleDelete} data={data} i={i} key={data._id}></MyProductsCard>)
                }

            </table>



            <ToastContainer></ToastContainer>
        </Container>

    );
};

export default MyProducts;