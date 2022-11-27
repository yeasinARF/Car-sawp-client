import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/car.png'
import { AuthContext } from '../../Utilities/Context/UserContext';
import './Footer.css'
const Footer = () => {
    const { user, logOut } = useContext(AuthContext);
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
        <footer className="footer font-small text-black pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-3">
                        <img className='Navimg' src={logo} alt="" />
                        <h5 className="py-2 fs-5 fw-bold">CarSwap</h5>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-0" />
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home' style={{ textDecoration: "none", color: "black" }}>Home</Link></li>
                            <li><Link to='/blog' style={{ textDecoration: "none", color: "black" }}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            {
                                user?.uid ? <div>
                                    <li><Link to='/dashboard' style={{ textDecoration: "none", color: "black" }}>Dashboard</Link></li>
                                    <li><Link onClick={handleLogOut} to='/login' style={{ textDecoration: "none", color: "black" }}>Log out</Link></li>
                                </div>
                                    : <li><Link to='/login' style={{ textDecoration: "none", color: "black" }}>Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="https://yeasinarf.github.io/my-portfolio/" rel='noreferrer' target="_blank"> Asif Farhan</a>
            </div>
        </footer>
    );
};

export default Footer;