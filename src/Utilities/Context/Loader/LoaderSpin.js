import React from 'react';
import { Container } from 'react-bootstrap';
import { BallTriangle, Dna } from 'react-loader-spinner';
import './LoaderSpin.css'

const LoaderSpin = () => {
    return (
        <Container className='loader'>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            
        </Container>
    );
};

export default LoaderSpin;