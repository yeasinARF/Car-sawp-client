import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// import eye from '../../../Images/view.png'
import './MyOrderCard.css';
import defaultImage from '../../../Images/icar.png'

const MyOrdersCard = ({ data, handleDelete,check,i}) => {
    const { name, _id, orderId, img, delivery, buyer_location, price, resale_price, payment_status, orderQuantity, delivery_status,time } = data;
    const subTotal = price?.toLocaleString('en-IN');
    const totalCost=parseInt(price);
    const [charge, setCharge] = useState('60')
    const [outside, setOutside] = useState('120')
    const insideCity=parseInt(charge)
    const outsideCity=parseInt(outside)
    
    return (
        <>
            <tbody style={{ fontSize: '0.7rem' }}>
                {/* row 1 */}
                <tr style={{borderBottom:'1px solid #CECECE'}}>
                    
                    <td>{i+1}</td>
                    {/* <th>
                        <label>
                            <input type="checkbox" checked={check} className="checkbox" />
                        </label>
                    </th> */}
                    <td>
                        {orderId}
                    </td>
                    <td>
                        <div className="d-flex justify-between ">
                            <div className="">
                                <PhotoProvider>
                                    <PhotoView src={img?img:defaultImage} >
                                        <img src={img?img:defaultImage} alt="product" style={{ height: '35px', width: '35px', borderRadius: '50%', cursor: 'pointer' }}  />
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
                        {orderQuantity}
                        <br />

                    </td>
                    <td >$ {subTotal}</td>
                    {
                        buyer_location==='Dhaka'?
                        <td>$ {charge}</td>
                        : <td>$ {outside}</td>
                    }
                    
                    {
                        buyer_location==='Dhaka'?
                        <td>$ {(totalCost+insideCity).toLocaleString('en-IN')}</td>:
                        <td>$ {(totalCost+outsideCity).toLocaleString('en-IN')}</td>
                    }
                    <td style={payment_status==='Unpaid'? {color:'red'}: payment_status==='Partial Paid'?{color:'#F86F03'}:{color:'#54B435'}}>{payment_status}</td>
                    <td style={delivery_status==='Pending'? {color:'red'}: delivery_status==='Processing'?{color:'#F86F03'}:{color:'#54B435'}}>{delivery_status}</td>
                    <td>{delivery_status==='Processing' || delivery_status==='Delivered'? <FaTrashAlt disabled style={{ color: 'gray', cursor:'not-allowed' }}></FaTrashAlt> :<span onClick={() => handleDelete(_id)} className='  fw-bold ' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer' }}></FaTrashAlt></span>}</td>
                </tr>
            </tbody>
        </>
        // <Col md={6} lg={6} >
        //     <Card className='p-2 card mb-3 cardProduct'style={{boxShadow:"2px 2px 10px 4px rgb(211, 211, 211)",backgroundColor:"rgb(227, 227, 227)",border:'none'}} >
        //         <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />
        //         <Card.Body>
        //             <Card.Title className='fw-bold'>Product Name: {name}</Card.Title>

        //             <p className=''>Total Quantity: {orderQuantity} </p>
        //             <p className=''>Payment Status: {payment_status} </p>
        //             <p className=''>Delivery Method: {delivery} </p>
        //             <p className=''>Delivery Status: {delivery_status} </p>
        //             <div>
        //                             <p style={{color:'#6B43FB',fontSize:'0.8rem',fontWeight:'bold'}}>{buyer_location==='Dhaka'?'[N.B: Delivery with in 2-3 working days!Inside Dhaka]':'[N.B: Delivery with in 4 working days!Outside Dhaka]'}</p>
        //                         </div>

        //             <p className=''><span className='fw-bold'>Sub Total:</span> $ {subTotal} </p>
        //             <div className='text-center'>
        //             <Button style={{ backgroundColor: '#6B43FB', width: '100%', height: '50px', fontSize: '1.2rem', border: 'none',paddingLeft:'10px',paddingRight:'10px' }}>Cancel Order</Button>
        //             </div>




        //         </Card.Body>
        //     </Card>
        // </Col>
    );
};

export default MyOrdersCard;