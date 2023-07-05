import React from 'react';
import PaymentStatus from '../PaymentStatus/PaymentStatus';
import 'react-photo-view/dist/react-photo-view.css';
import { FaTrashAlt } from 'react-icons/fa';
import view from '../../../Images/view.png'
import ViewData from './ViewData/ViewData';
import { ToastContainer } from 'react-bootstrap';

const CustomerOrderCard = ({ data, i, handleDelete }) => {
    const { orderId, orderQuantity, _id, resale_price, original_price, buyer_name, email, price, buyer_number, buyer_location, payment_status, time, delivery_status } = data;
    const subTotal = price?.toLocaleString('en-IN');
    return (
        <>
            <tbody style={{ fontSize: '0.8rem' }}>
                {/* row 1 */}
                <tr style={{ borderBottom: '1px solid #CECECE' }}>
                    <td>{i + 1}</td>
                    {/* <th>
                        <label>
                            <input type="checkbox" checked={check} className="checkbox" />
                        </label>
                    </th> */}
                    <td>
                        SALE-{orderId}
                    </td>
                    <td >
                        {time}
                        <br />
                    </td>
                    <td>
                        {buyer_name}
                    </td>
                    <td >$ {subTotal}</td>
                    <td style={payment_status === 'Unpaid' ? { color: 'red' } : payment_status === 'Partial Paid' ? { color: '#F86F03' } : { color: '#54B435' }}>{payment_status}</td>
                    <td style={delivery_status === 'Pending' ? { color: 'red' } : delivery_status === 'Processing' ? { color: '#F86F03' } : { color: '#54B435' }}>{delivery_status}</td>
                    <td >
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <ViewData data={data}></ViewData>
                            <PaymentStatus data={data}></PaymentStatus>
                            {delivery_status === 'Processing' || delivery_status === 'Delivered' || payment_status==='Paid' ? <span className='fw-bold'><FaTrashAlt disabled style={{ color: 'gray', cursor: 'not-allowed' }}></FaTrashAlt></span> : <span onClick={() => handleDelete(_id)} className='  fw-bold ' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer' }}></FaTrashAlt></span>}
                        </div>
                    </td>

                </tr>
            </tbody>
            
        </>
    );
};

export default CustomerOrderCard;