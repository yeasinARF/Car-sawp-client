import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import team from '../Images/team.png';

const AboutSection = () => {
    return (
        <Container className='my-3'>
            <h1 className='text-center py-3' ><span >About </span><span style={{color:'#6B43FB'}}>Us</span></h1>
            <Row >
                <Col className='mx-auto' lg={7} md={10} sm={12} xs={12} >
                    <img className='img-fluid rounded d-block' style={{ marginTop: '-50px' }} src={team} alt="" />
                </Col>
                <Col className='mx-auto ' lg={5} md={10} sm={12} xs={12} >

                    <h4>World's Largest Automotive Marketplace</h4>

                        <p>CarSwap is the leading brand and most reliable online auto marketplace developed by Md. Yeasin Arafat. CarSwap was founded in 2022. Our headquarter is in Dhaka (Bangladesh). It’s mission is to bring ease and delight in car buying and selling process. CarSwap offers a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner.</p>

                        <h4>OUR Key Features</h4>

                        <p>- Buy Car (Brand New Car, Reconditioned Car, Used Car)<br></br>
                        - Sell Car (Brand New Car, Reconditioned Car, Used Car)</p>
                        

                        <p>Our vision is to construct a transparent ecosystem for consumers and car manufacturers, dealers, re-sellers to ensure the most reliable and enjoyable car buying and selling experience.</p>

                </Col>
            </Row>
        </Container>
    );
};

export default AboutSection;