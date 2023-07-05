import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Images/car.png';
import { AuthContext } from '../../Utilities/Context/UserContext';
import './Header.css'
import useRole from '../../useRole';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const [currentUser] = useRole(user);
    const [userName, setUserName] = useState(false)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
                
            })
            .catch(error => console.error(error))
    }
    // admin log out 
    const handleAdminLogOut = () => {
        logOut()
            .then(() => {
                navigate('/admin-login')
            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='navBar sticky-topP text-center' variant="light">
            <Container>
                {
                    (currentUser === 'seller' || currentUser === 'admin')  ?
                        <>
                            <Navbar.Brand className='fw-bold '><Link className=' text-decoration-none fw-bold ps-2 ' style={{ fontSize: '2rem', color: '#6B43FB' }}><span style={{ color: 'black' }}>Car</span>Swap</Link></Navbar.Brand>
                            <Navbar.Toggle className='navToggle' aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    {
                                        user?.uid ? <div className=' privateNav'>
                                            {
                                                (currentUser==='buyer')? <NavLink className='navLink pe-4 py-3 fw-bold' to='/dashboard' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Dashboard</NavLink>
                                                :'' 
                                            }
                                            <div className='d-inline imgDiv'><img className='userProfileImg' onMouseEnter={() => setUserName(true)} onMouseLeave={() => setUserName(false)} style={{ height: '40px', width: '40px', marginRight: '22px', padding: '2px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #6B43FB' }} src={user?.photoURL} alt="" /></div>
                                            <p className={userName ? "visible showName rounded" : "visible hideName rounded"}>{user?.displayName}</p>
                                            <NavLink onClick={(currentUser==='admin')? handleAdminLogOut : handleLogOut} className='navLink pe-4 py-3' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>LogOut</NavLink></div>
                                            : <NavLink className='navLink pe-4 py-3 ' to='/login' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Login</NavLink>
                                    }
                                </Nav>
                            </Navbar.Collapse>

                        </>
                        :
                        <>
                            <Navbar.Brand className=' '><Link className=' text-decoration-none fw-bold ps-2 ' style={{ fontSize: '2rem', color: '#6B43FB' }} to='/'><span style={{ color: 'black' }}>Car</span>Swap</Link></Navbar.Brand>
                            <Navbar.Toggle className='navToggle' aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <NavLink className='navLink pe-4 py-3 ' to='/home' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Home</NavLink>
                                    <NavLink className='navLink pe-4 py-3 ' to='/aboutUs' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>About Us</NavLink>
                                    <NavLink className='navLink pe-4 py-3 ' to='/contactUs' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Contact Us</NavLink>

                                    {
                                        user?.uid ? <div className=' privateNav'>
                                            <NavLink className='navLink pe-4 py-3' to='/allcars' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251) ', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>All Cars</NavLink>
                                            <NavLink className='navLink pe-4 py-3 ' to={`myOrders/${user?.email}`} style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Dashboard</NavLink>
                                            <div className='d-inline imgDiv'><img className='userProfileImg' onMouseEnter={() => setUserName(true)} onMouseLeave={() => setUserName(false)} style={{ height: '40px', width: '40px', marginRight: '22px', padding: '2px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #6B43FB' }} src={user.photoURL} alt="" /></div>
                                            <p className={userName ? "visible showName rounded" : "visible hideName rounded"}>{user?.displayName}</p>
                                            <NavLink onClick={handleLogOut} className='navLink pe-4 py-3 fw-bold' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>LogOut</NavLink></div>
                                            : <NavLink className='navLink pe-4 py-3 ' to='/login' style={({ isActive }) => isActive ? { color: 'rgb(107, 67, 251)', textDecorationColor: 'rgb(107, 67, 251)', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'black', textDecoration: 'none' }}>Login</NavLink>
                                    }

                                </Nav>
                            </Navbar.Collapse>
                        </>
                }

            </Container>
        </Navbar>
    );
};

export default Header;