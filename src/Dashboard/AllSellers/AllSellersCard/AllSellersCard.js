import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import defaultImage from '../../../Images/admin.png'


const AllSellersCard = ({ i, data, handleDelete }) => {
    const { name, img, email, _id } = data;
    return (
        <>
            <tbody style={{ fontSize: '0.9rem' }}>
                {/* row 1 */}
                <tr style={{ borderBottom: '1px solid #CECECE' }}>

                    <td>{i + 1}</td>
                    {/* <th>
                        <label>
                            <input type="checkbox" checked={check} className="checkbox" />
                        </label>
                    </th> */}
                    <td>
                        <div className="d-flex justify-between ">
                            <div className="">
                                <PhotoProvider>
                                    <PhotoView src={img ? img : defaultImage} >
                                        <img src={img ? img : defaultImage} alt="product" style={{ height: '35px', width: '35px', borderRadius: '50%', cursor: 'pointer' }} />
                                        {/* <img src={eye} alt='view' style={{height:'25px', width:'25px'}}/> */}
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className=' ps-2'>
                                <div className="font-bold">{name}</div>
                            </div>
                        </div>
                    </td>
                    <td >
                        {email}
                        <br />
                    </td>
                </tr>
            </tbody>
        </>
        // <Col md={6} lg={6} className='mx-auto'>
        //     <Card className='p-1 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none',  }}>

        //         <Card.Body>

        //             <p className='' style={{ textTransform: 'capitalize' }}><img className='' style={{height:'40px',width:'40px',borderRadius:'30px'}} src={img} alt="" /><span className='fw-bold ps-2'>Name: </span>{name}</p>
        //             <p style={{ fontSize: '0.9rem' }}><span className='fw-bold'>Email: </span>{email}</p>
        //             <div className='d-flex justify-content-between'>
        //                 <Button className='mt-2' style={{ height: '35px', width: '150px', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#6B43FB' }}>View Details</Button>

        //                 <span onClick={() => handleDelete(_id)} className='px-2 py-2 fw-bold fs-3' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer',marginTop:'-12px' }}></FaTrashAlt></span>
        //             </div>
        //         </Card.Body>
        //     </Card>
        // </Col>
    );
};

export default AllSellersCard;