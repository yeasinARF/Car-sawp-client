import React, { useContext, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import loc from '../../../Images/location.png';
import seller from '../../../Images/user.png';
import './ProductCard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookNow from '../../../BookNow/BookNow';
import { AuthContext } from '../../../Utilities/Context/UserContext';
import useRole from '../../../useRole';

const ProductCard = ({ data, category }) => {
    const { name, img, location, resale_price, original_price, years_of_use, seller_name, _id, time, status, condition,seller_image,seller_email } = data;
    const [disable, setDisable] = useState(false);
    const { user } = useContext(AuthContext);
    const [currentUser] = useRole(user);
    const handleReportToAdmin = (_id) => {
        const reportedItem = {
            name: name,
            img: img,
            item_id: _id,
            time: new Date(),
        }
        fetch(`https://car-swap-server.vercel.app/reportedItem/${_id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reportedItem),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Successfully Reported this item");
                    setDisable(true)

                }
                else {
                    toast("Something Went Wrong!");
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <Col md={6} lg={4}>

            <Card className='p-2 card my-5 cardProduct ' style={{ boxShadow: "2px 2px 10px 4px rgb(211, 211, 211)", backgroundColor: "rgb(227, 227, 227)", border: 'none' }}>
                <Card.Img variant="top" className='w-100 rounded ' src={img} style={{ height: '250px' }} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{name}</Card.Title>
                    <h6>
                        <p className=''><img className='locImg ' src={loc} alt="" /> {location}</p>
                        <p className=''>Original Price: $ {original_price} </p>
                        <p className=''>Resale Price: $ {resale_price} </p>
                        <p className=''>Condition:<span></span> {condition}</p>
                        <p className=''>Year of Use: {years_of_use} yr/yrs</p>
                        <p className=''>Availability: {status}</p>
                        <div>
                            <p className='' style={{fontWeight:'bold',textTransform:'capitalize'}}><span><img className='locImg' style={{height:'50px',width:'50px',borderRadius:'30px',border: '3px solid #6B43FB'}}src={seller_image} alt="" /></span> {seller_name}</p>
                            <p className=''>Posted On: <span>{time}</span></p>
                        </div>
                    </h6>
                    <div className='d-flex justify-content-between'>
                        {
                            (currentUser === 'buyer' || user?.uid) ? <>

                                <BookNow data={data}></BookNow>
                                <Button className='w-100' style={{ backgroundColor: '#6B43FB', width: '130px', height: '40px', fontSize: '1rem', border: 'none' }} disabled={disable} onClick={() => handleReportToAdmin(_id)}>Report</Button>
                            </>
                            : ''
                        }
                    </div>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Col>
    );
};

export default ProductCard;