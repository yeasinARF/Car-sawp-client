import moment from 'moment';
import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyProductsCard.css'
import EditProduct from './EditProduct/EditProduct';
import { AuthContext } from '../../../Utilities/Context/UserContext';
import LoaderSpin from '../../../Utilities/Context/Loader/LoaderSpin';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import defaultImage from '../../../Images/icar.png'
import ad from '../../../Images/megaphone.png'
import stockOt from '../../../Images/not-available.png'

const MyProductsCard = ({ data,i,handleDelete }) => {
    const { name, img, _id, resale_price, original_price, location,status, years_of_use, purchase_year, seller_name, seller_image, stockQuantity, condition, seller_email,item_code } = data;
    const { user, loader } = useContext(AuthContext);
    const stock=parseInt(stockQuantity)
    if (loader) {
        return <LoaderSpin></LoaderSpin>;
    }
    const a = parseInt(original_price);
    const originalPrice = a.toLocaleString('en-IN')
    const b = parseInt(resale_price);
    const resalePrice = b.toLocaleString('en-IN')
    const handleAdvertise = () => {
        const advertise = {
            name: name,
            img: img,
            item_id: _id,
            time: moment().format('lll'),
            resale_price: resale_price,
            original_price: original_price,
            years_of_use: years_of_use,
            purchase_year: purchase_year,
            seller_name,
            seller_image,
            seller_email,
            status,
            stockQuantity,
            condition,
            location,
            item_code
        }
        fetch('https://car-swap-server.vercel.app/advertise', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(advertise),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('Advertisement done', {
                        position: toast.POSITION.TOP_RIGHT,
                        className: 'toast-message'
                    });
                }
            });
    }
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
                        {item_code}
                    </td>
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
                    
                    <td style={stock>5?{color:'green'}:{color:'red'}}>
                        {stockQuantity}
                        <br />

                    </td>
                    <td >$ {originalPrice}</td>
                    <td >$ {resalePrice}</td>
                    <td>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                    
                                    {
                                        stockQuantity > 5 ?
                                        <img src={ad} alt="adItem" onClick={handleAdvertise} style={{ height: '25px', width: '25px', borderRadius: '50%', cursor: 'pointer' }} />
                                            
                                        : <img src={stockOt} alt="stockOut"   style={{ height: '25px', width: '25px', borderRadius: '50%',  cursor:'not-allowed' }} />
                                    }
                                    <EditProduct  data={data} ></EditProduct>
                                    <p onClick={() => handleDelete(_id)} className='  fw-bold' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer',height:'20px',width:'20px' }}></FaTrashAlt></p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
        // card way to display data from db ........................................
        //.......................................................................

        // <Col md={6} lg={6}>
        //     <Card className='p-2 card mb-3 cardProduct' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
        //         <Card.Img variant="top" className='w-100 rounded img-fluid' style={{ height: '200px' }} src={img} />

        //         <Card.Body>
        //             <Card.Title className='fw-bold'>{name}</Card.Title>
        //             <p className=''>Original Price: $ {original_price} </p>
        //             <p className=''>Resale Price: $ {resale_price} </p>
        //             <p>Available Quantity: {stockQuantity} pc</p>
                    

        //         </Card.Body>
        //     </Card>
        //     <ToastContainer />
        // </Col>
    );
};

export default MyProductsCard;