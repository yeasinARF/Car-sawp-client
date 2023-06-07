import React, { useContext } from 'react';
import { Card, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useRole from '../../useRole';
import { AuthContext } from '../../Utilities/Context/UserContext';
import allSellers from '../../Images/group.png';
import overall from '../../Images/home.png';
import reportedItems from '../../Images/items.png'
import addBrand from '../../Images/brand-image.png';
import allBrand from '../../Images/brand.png';
import addProduct from '../../Images/add-product.png'
import allProduct from '../../Images/sugar-cubes.png';
import order from '../../Images/checkout.png';
import profile from '../../Images/profile.png';






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
                                <Card className='p-2 card mb-3 cardProduct w-100 ps-5 py-3' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                                    <h4 className='fw-bold mb-4' style={{ color: '#6B43FB' }}>Seller Panel</h4>
                                    <NavLink style={({ isActive }) => isActive ?  { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to='dashboard'><img className=' rounded ' src={overall} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />Dashboard</NavLink>
                                    <NavLink style={({ isActive }) => isActive ?  { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to='addCategory'><img className=' rounded ' src={addBrand} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />Add Brand</NavLink>

                                    <NavLink style={({ isActive }) => isActive ?  { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }}  className='fw-bold pb-3 pe-3' to={`allBrand/${user?.email}`}><img className=' rounded ' src={allBrand} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />All Brand</NavLink>
                                    <NavLink style={({ isActive }) => isActive ?  { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to='addProduct'><img className=' rounded ' src={addProduct} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />Add Product</NavLink>
                                    <NavLink style={({ isActive }) => isActive ?  { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to={`myProducts/${user?.email}`}><img className=' rounded ' src={allProduct} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />All Products</NavLink>
                                    <NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to={`order/${user?.email}`}><img className=' rounded ' src={order} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />Order</NavLink>
                                    < NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3' to=''><img className=' rounded ' src={profile} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />My Profile</NavLink>
                                    
                                </Card>

                            </>
                        }
                        {
                            currentUser === 'admin' && <>
                                <Card className='p-2 card mb-3 cardProduct w-100 ps-5 py-3' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                                    <h4 className='fw-bold mb-4' style={{ color: '#6B43FB', paddingLeft: '10px' }}>Admin Panel</h4>
                                    <div className='mb-4'>
                                        <NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to='dashboard'><img className=' rounded ' src={overall} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} /> Dashboard</NavLink>
                                    </div>
                                    <div className='mb-4'>
                                        <NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px' } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to='allSellers'><img className=' rounded ' src={allSellers} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder'  }} /> All Sellers</NavLink>
                                    </div>
                                    <div className='mb-4'>
                                        <NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px' } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to='allBuyers'><img className=' rounded ' src={allSellers} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} /> All Buyers</NavLink>
                                    </div>
                                    <div className='mb-4'>
                                        <NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px' } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3 pe-3' to='reportedItems'><img className=' rounded ' src={reportedItems} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} /> Reported Items</NavLink>
                                    </div>
                                    <div className='mb-4'>
                                        < NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3' to=''><img className=' rounded ' src={profile} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />My Profile</NavLink>
                                    </div>

                                </Card>

                            </>
                        }
                    </>
                        : <>
                            {
                                (currentUser === 'buyer' || user?.uid) && <Card className='p-2 card mb-3 cardProduct w-100 ps-5 py-3' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                                    < NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3' to={`myOrders/${user?.email}`}><img className=' rounded ' src={order} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />My Orders</NavLink>
                                    < NavLink style={({ isActive }) => isActive ? { color: 'white', backgroundColor: 'rgb(107, 67, 251) ', textDecoration: 'none', paddingLeft: '10px', paddingTop: '15px', lineHeight: '8px', marginBottom: '10px', width: '200px', borderRadius: '5px', } : { paddingLeft: '10px', color: 'blue', textDecoration: 'none' }} className='fw-bold pb-3' to=''><img className=' rounded ' src={profile} alt="" style={{ height: '25px', width: '25px', marginTop: '-5px', marginRight: '8px',fontWeight:'bolder' }} />My Profile</NavLink>


                                </Card>
                            }
                        </>


                }
            </Nav>
        </Container >
    );
};

export default SideBar;