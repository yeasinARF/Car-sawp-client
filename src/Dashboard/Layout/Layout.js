import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet} from 'react-router-dom';
import useRole from '../../useRole';
import { AuthContext } from '../../Utilities/Context/UserContext';
import SideBar from '../SideBar/SideBar';

const Layout = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <h1 className='text-center fs-5 py-4'>Welcome, <span style={{color:'rgb(104, 33, 218)'}}>{user?.displayName}</span> to Dashboard Panel! </h1>
            <Row className='g-5'>
                <Col md={4} lg={4}>
                    <SideBar></SideBar>
                </Col>
                <Col md={8} lg={8}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;