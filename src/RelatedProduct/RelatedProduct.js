import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RelatedProductCard from './RelatedCard/RelatedProductCard';

const RelatedProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/advertiseItem')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <Container className='my-3'>
            <h5 className='pb-4'>Similar Cars You<span style={{color:'#7D43FB'}}> Might Like</span></h5>
            <Row className='g-3 mb-5'>
                {
                    product.map(data => <RelatedProductCard data={data} key={data._id}></RelatedProductCard>)

                }
            </Row>
        </Container>
    );
};

export default RelatedProduct;