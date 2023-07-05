import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllCarsCard from './AllCarsCard/AllCarsCard';
import Categories from '../Home/Categories/Categories';
import BrandCar from '../../BrandCar/BrandCar';

const AllCars = () => {
    const data=useLoaderData();
    const [categorie, setCategorie] = useState([]);
    // categories fetch...............................
    useEffect(() => {
        fetch('https://car-swap-server.vercel.app/Categories')
            .then(res => res.json())
            .then(data => setCategorie(data))
    }, [])
    return (
        <Container>
            <h5 className='text-center py-3' >Choose By <span style={{color:'#6B43FB'}}>Makers</span></h5>
            <Container className=' text-center my-3' style={{ color: 'black' }}>
                <Row className='g-3'>
                    {
                        categorie.map(data => <BrandCar data={data} key={data._id}></BrandCar>)
                    }
                </Row>
            </Container>
            <Row className='g-3'>
                <h5 className='text-center ' >Total Results Found: <span style={{color:'#6B43FB'}}>{data?.length? data.length :'0'}</span></h5>
                {
                    data.map(data => <AllCarsCard data={data} key={data._id}></AllCarsCard>)
                }
            </Row>
        </Container>
    );
};

export default AllCars;