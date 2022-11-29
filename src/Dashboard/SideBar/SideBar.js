import React, { useContext} from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useRole from '../../useRole';
import { AuthContext } from '../../Utilities/Context/UserContext';


const SideBar = () => {
    const { user } = useContext(AuthContext);
    const [currentUser] = useRole(user);
    // console.log(currentUser);
    return (
        <Container>
            <Nav className="flex-md-column pb-5">
                {
                    (currentUser === 'seller' || currentUser === 'admin') ? <>
                        {
                            currentUser === 'seller' && <>
                                <NavLink style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251) ', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}  className='fw-bold pb-3 pe-3'  to='addProduct'>Add A Product</NavLink>
                                <NavLink style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251) ', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}  className='fw-bold pb-3 pe-3' to='myProducts'>My Products</NavLink>
                            </>
                        }
                        {
                            currentUser === 'admin'&&<>
                                <NavLink style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251) ', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}  className='fw-bold pb-3 pe-3' to='allSellers'>All Sellers</NavLink>
                                <NavLink style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251) ', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}  className='fw-bold pb-3 pe-3' to='allBuyers'>All Buyers</NavLink>
                                <NavLink style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251) ', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}  className='fw-bold pb-3 pe-3'to='reportedItems'>Reported Items</NavLink>
                            </>
                        }
                    </>
                        : <>
                            {
                                (currentUser === 'buyer' || user?.uid) && < NavLink style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251) ', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}  className='fw-bold pb-3' to='myOrders' >My Orders</NavLink>
                            }
                        </>


                }
            </Nav>
        </Container >
    );
};

export default SideBar;