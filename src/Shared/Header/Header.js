import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Images/car.png';
import { AuthContext } from '../../Utilities/Context/UserContext';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const [userName, setUserName] = useState(false)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='navBar' variant="light">
            <Container>
                <Navbar.Brand className='fw-bold '><Link className='text-black text-decoration-none fw-bold fs-5' to='/'><img className='me-2 Navimg' src={logo} alt="" />CarSwap</Link></Navbar.Brand>
                <Navbar.Toggle className='navToggle' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='navLink pe-4 py-3 fw-bold' to='/home' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Home</NavLink>
                        <NavLink className='navLink pe-4 py-3 fw-bold' to='/blog' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251) ', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Blog</NavLink>
                        {
                            user?.uid ? <div className=' privateNav'>
                                <NavLink className='navLink pe-4 py-3 fw-bold' to='/dashboard' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Dashboard</NavLink>
                                <img onMouseEnter={() => setUserName(true)} onMouseLeave={() => setUserName(false)} style={{ height: '40px', width: '40px', marginRight: '10px', borderRadius: '50%', objectFit: 'cover' }} src={user.photoURL} alt="" />
                                <p className={userName ? "visible showName" : "visible hideName"}>{user?.displayName}</p>
                                <NavLink onClick={handleLogOut} className='navLink pe-4 py-3 fw-bold' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>LogOut</NavLink></div>
                                : <NavLink className='navLink pe-4 py-3 fw-bold' to='/login' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;