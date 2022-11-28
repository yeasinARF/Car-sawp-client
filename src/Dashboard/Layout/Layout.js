import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet} from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const Layout = () => {
    
    return (
        <Container>
            <Row >
                <Col md={6} lg={6}>
                    <SideBar></SideBar>
                </Col>
                <Col md={6} lg={6}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;