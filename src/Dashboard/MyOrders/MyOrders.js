import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import MyOrdersCard from './MyOrdersCard/MyOrdersCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyOrders = () => {
    const data = useLoaderData();
    const [currentOrder, setCurrentOrder] = useState(data);
    const [currentPage,setCurrentPage]=useState(1);
    const [postPerPage,setPostPerPage]=useState(8);
    const [check, setCheck] = useState(false)
    // const [view, setView] = useState('none')

    // const handleClick = () => {
    //     if (check) {
    //         setCheck(false)
    //         setView('none')

    //     }
    //     else {
    //         setCheck(true)
    //         setView('block')

    //     }
    // }
    // single delete
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
                        toast('Deleted this Successfully!')
                    }
                })

        }
    }
    // all delete
    // const handleAllDelete = (_id) => {
    //     const proceed = window.confirm('Are you sure to delete this Items ?');
    //     if (proceed) {
    //         fetch('http://localhost:5000/allOrder', {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deletedCount > 0) {
                        
    //                     toast.success('All Deleted Successfully!')
    //                     window.location.reload();

                        
    //                 }
    //                 else{
    //                     toast.error('Something Wrong')
    //                 }
    //             })

    //     }
    // }
    console.log(data);
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
                        <th style={{ fontSize: '0.8rem' }}>Id</th>
                        <th style={{ fontSize: '0.8rem' }}>Name</th>
                        <th style={{ fontSize: '0.8rem' }}>Qty.</th>
                        <th style={{ fontSize: '0.8rem' }}>Sub Total</th>
                        <th style={{ fontSize: '0.8rem' }}>Delivery Fee</th>
                        <th style={{ fontSize: '0.8rem' }}>Sub Total</th>
                        <th style={{ fontSize: '0.8rem' }}>Payment</th>
                        <th style={{ fontSize: '0.8rem' }}>Delivery</th>
                        <th style={{ fontSize: '0.8rem' }}>Action</th>
                        {/* <th style={{ fontSize: '0.9rem', }}>{view === 'block' ? <FaTrashAlt onClick={handleAllDelete}style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer', display: view }}></FaTrashAlt> : 'Action'}</th> */}



                    </tr>
                </thead>
                {
                    currentOrder.length === 0 ? <p className='text-center fw-bold py-3 text-black'>No Order Yet!</p>
                        : currentOrder.map((data,i) => <MyOrdersCard handleDelete={handleDelete} i={i}check={check} data={data} key={data._id}></MyOrdersCard>)
                }
            </table>

            <ToastContainer />

        </Container>
    );
};

export default MyOrders;