import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/car.png'
import { AuthContext } from '../../Utilities/Context/UserContext';
import { FaFacebook,FaInstagram, FaYoutube } from "react-icons/fa";
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
            <div className="container-fluid text-center ">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-3 ps-5 text-md-start">
                        
                        <h5 className="py-2  fw-bold" style={{color:'black',fontSize:'2rem',cursor:'pointer'}}>Car<span style={{color:'#6B43FB'}}>Swap</span></h5>
                        <p>It is a top second-hand car buying platform.We have gained popularity by providing good service.</p>
                        <div className="social mb-2">
                            <a className='pe-3' href='https://www.facebook.com/profile.php?id=100009509407869' target='_blank' ><FaFacebook style={{color:'#6B43FB',fontSize:'1.5rem'}}></FaFacebook></a>
                            <a className='pe-3' href='https://www.instagram.com/farhan__asif/' target='_blank'><FaInstagram style={{color:'#6B43FB',fontSize:'1.5rem'}}></FaInstagram ></a>
                            <a className='pe-3' href='https://www.youtube.com/@CoderWeb' target='_blank'><FaYoutube style={{color:'#6B43FB',fontSize:'1.5rem'}}></FaYoutube></a>
                        </div>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-0" />
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase"style={{fontSize:'1rem'}}>Contact</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/aboutUs' style={{ textDecoration: "none", color: "black" }}>About Us</Link></li>
                            <li><Link to='/contactUs' style={{ textDecoration: "none", color: "black" }}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase" style={{fontSize:'1rem'}}>Account</h5>
                
                        <ul className="list-unstyled">
                            {
                                user?.uid ? <div>
                                    <li><Link to='/privacy' style={{ textDecoration: "none", color: "black" }}>Terms & Conditions</Link></li>
                                    <li><Link onClick={handleLogOut} to='/login' style={{ textDecoration: "none", color: "black" }}>Log out</Link></li>
                                </div>
                                    : <li><Link to='/login' style={{ textDecoration: "none", color: "black" }}>Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2022 - Present ||  Developed by:
                <a href="https://yeasinarf.github.io/my-portfolio/" rel='noreferrer' target="_blank"> Asif Farhan</a>
            </div>
        </footer>
    );
};

export default Footer;