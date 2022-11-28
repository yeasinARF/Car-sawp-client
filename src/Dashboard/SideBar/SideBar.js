import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useRole from '../../useRole';
import { AuthContext } from '../../Utilities/Context/UserContext';


const SideBar = () => {
    const { user } = useContext(AuthContext);
    const [currentUser] = useRole(user);
    // console.log(currentUser);
    return (
        <Container>
            <Nav className="flex-column">
                {
                    (currentUser === 'seller' || currentUser === 'admin') ? <>
                        {
                            currentUser === 'seller' && <>
                                <Link to='addProduct'>Add A Product</Link>
                                <Link to='myProducts'>My Products</Link>
                            </>
                        }
                        {
                            currentUser === 'admin'&&<>
                                <Link to='allSellers'>All Sellers</Link>
                                <Link to='allBuyers'>All Buyers</Link>
                                <Link to='reportedItems'>Reported Items</Link>
                            </>
                        }
                    </>
                        : <>
                            {
                                (currentUser === 'buyer' || user?.uid) && < Link to='myOrders' >My Orders</Link>
                            }
                        </>


                }
            </Nav>
        </Container >
    );
};

export default SideBar;