import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProductsCard from './MyProductsCard/MyProductsCard';


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
                        toast('Deleted this Successfully!')
                    }
                })

        }
    }
    return (
        <Container>
            <Row className='g-3'>
                {
                    currentProducts.length === 0 ? <p className=' fw-bold py-3 text-black text-center'>You have no Products!</p>
                        : currentProducts.map(data => <MyProductsCard handleDelete={handleDelete} data={data} key={data._id}></MyProductsCard>)

                }
            </Row>
            <ToastContainer />
        </Container>

    );
};

export default MyProducts;