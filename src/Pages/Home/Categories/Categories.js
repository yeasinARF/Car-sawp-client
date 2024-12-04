import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Home.css'

const Categories = ({data}) => {
    const {name,img,_id}=data;
    return (
        <Col md={6} lg={4} xl={3}>
            <Link to={`/specific-car/${_id}`}className='text-decoration-none text-black '>
                <Card className='p-2 card cd border-0' style={{boxShadow:"2px 2px 10px 4px rgb(211, 211, 211)",backgroundColor:"rgb(227, 227, 227)"}}>
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