import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Categories = ({data}) => {
    const {name,img,_id}=data;
    return (
        <Col md={4} lg={4}>
            <Link to={`/category/${_id}`}className='text-decoration-none text-black'>
                <Card className='p-2 card'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h5>{name}</h5>
                </Card>
            </Link>
        </Col>
    );
};

export default Categories;