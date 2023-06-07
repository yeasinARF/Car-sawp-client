import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'
import ImageNotFound from '../../Images/404.jpg'

const NotFound = () => {
    return (
        <Container className='text-center text-white'>
            <div className='text-center py-3'>
                <img className='notfound rounded' style={{boxShadow:'box-shadow:2px 2px 10px 4px rgb(211, 211, 211);'}} src={ImageNotFound} alt="" />
            </div>
            <h3 style={{color:'black'}} className='py-2'>404- Page Not Found</h3>
            <p style={{color:'black'}}>
                The page you are looking for might have been removed or temporary unavailable!
            </p>
            <Button className='rounded'><Link className='text-white' to='/'>Go Back Home</Link></Button>
        </Container>
    );
};

export default NotFound;