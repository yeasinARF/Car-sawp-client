import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import { AuthContext } from '../../Utilities/Context/UserContext';
import SideBar from '../SideBar/SideBar';


const Layout = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>

            <h1 className='text-center fs-5 py-4'>Welcome, <span style={{ color: 'rgb(104, 33, 218)' }}>{user?.displayName}</span> to Dashboard Panel! </h1>
            <Row className='g-2'>
                <Col md={10} lg={3} className='mx-auto'>
                    <SideBar></SideBar>


                </Col>
                <Col md={11} lg={9} className='mx-auto'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;