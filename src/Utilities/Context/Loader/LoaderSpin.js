import React from 'react';
import { Container } from 'react-bootstrap';
import { BallTriangle } from 'react-loader-spinner';
import './LoaderSpin.css'

const LoaderSpin = () => {
    return (
        <Container className='loader'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#6B43FB"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </Container>
    );
};

export default LoaderSpin;