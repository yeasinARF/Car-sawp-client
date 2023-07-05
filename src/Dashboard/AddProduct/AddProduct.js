import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Utilities/Context/UserContext';
import moment from 'moment/moment';

const AddProduct = () => {
    const { user, verify } = useContext(AuthContext)
    const [data, setData] = useState([])
    const navigate = useNavigate();
    const [categoryId, setCategoryId] = useState('');
    const [exist, setExist] = useState()
    const [regPrice, setRegPrice] = useState()
    const [salePrice, setSalePrice] = useState()
    // products data 
    useEffect(() => {
        fetch(`http://localhost:5000/products/${user.email}`)
            .then(res => res.json())
            .then(data => setExist(data))
    }, [])
    const handleChange = (e) => {
        setCategoryId(e.target.value);
        console.log(e.target.value);

    }
    const handlePrice = e => {
        const value = e.target.value;
        const regularPrice = parseInt(value);
        setRegPrice(regularPrice);

    }
    const handleSale = e => {
        const value = e.target.value;
        const saleP = parseInt(value)
        setSalePrice(saleP)



    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.img.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const stockQuantity = form.stockQuantity.value;
        const description = form.description.value;
        const purchaseYear = form.yearOfPurchase.value;
        const usedYears = form.yearsOfUse.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const condition = form.group1.value;
        const status = form.status.value;
        const item_code = Math.floor(Math.random() * (100000 - 10000 + 1) + 10000);

        if (categoryId === '') {
            alert('Please chose a category!')
            return
        }


        const product = {
            category_id: categoryId,
            name,
            img: image,
            condition,
            time: moment().format('lll'),
            seller_email: user.email,
            seller_name: user.displayName,
            seller_image: user.photoURL,
            phone: phone,
            location: location,
            resale_price: resalePrice,
            original_price: originalPrice,
            years_of_use: usedYears,
            purchase_year: purchaseYear,
            description: description,
            stockQuantity: stockQuantity,
            seller_verify: verify.verified,
            item_code,
            status
        }
        // console.log(product);
        const ex = exist.find(x => (x.name).replace(/\s+/g, '').toLowerCase() === (name).replace(/\s+/g, '').toLowerCase())
        if (ex) {
            toast.error("Name Already Exist");
            return;
        }
        else {
            if (salePrice >= regPrice) {
                toast.error('Resale price should be less')
                return;
            }
            else {
                fetch("http://localhost:5000/cars", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(product),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.acknowledged) {

                            navigate(`/myProducts/${user?.email}`)
                            toast.success("Product Added Successfully");
                            e.target.reset();
                        }
                    });
            }


        }

    };
    useEffect(() => {
        fetch("https://car-swap-server.vercel.app/categories")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <Container className='mx-auto'>

            <Row>
                <Col md={10} lg={11} className="my-3">
                    <Form onSubmit={handleAddProduct}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Product Name:</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Enter Product Name" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Image Url:</Form.Label>
                                    <Form.Control type="text" name='img' placeholder="Enter Image Url:" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Original Price:</Form.Label>
                                    <Form.Control onChange={handlePrice} type="number" name='originalPrice' placeholder="Original Price" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Resale Price:</Form.Label>
                                    <Form.Control onChange={handleSale} type="number" name='resalePrice' placeholder="Resale Price" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Stock Quantity</Form.Label>
                                    <Form.Control type="number" name='stockQuantity' placeholder="Stock Quantity" required />
                                </Form.Group>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3 " >
                                        <span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Status:<br></br>
                                        <Form.Check
                                            inline
                                            type={type}
                                            name='status'
                                            value='available'
                                            id={`inline-${type}-4`}
                                            label='In Stock'
                                            required
                                        />
                                        <Form.Check
                                            inline
                                            type={type}
                                            name='status'
                                            value='sold'
                                            id={`inline-${type}-5`}
                                            label='Stock Out'
                                            required
                                        />

                                    </div>
                                ))}
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='text-black'>Description:</Form.Label>
                                    <Form.Control as="textarea" name='description' rows={3} />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Phone Number:</Form.Label>
                                    <Form.Control type="tel" name='phone' placeholder="Phone Number" required />
                                </Form.Group>



                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Year of Purchase: </Form.Label>
                                    <Form.Control type="text" name='yearOfPurchase' placeholder="Year of Purchase" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Years of Use:</Form.Label>
                                    <Form.Control type="text" name='yearsOfUse' placeholder="Years of Use" required />
                                </Form.Group>

                                <label><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Choose Brand: </label><br></br>
                                <select onChange={handleChange} style={{ border: 'none', outline: 'none', height: '40px', borderRadius: '6px' }} required >
                                    <option value="Select an Option" selected disabled hidden  >Select an Option</option>
                                    {
                                        data.map(d => <option key={d._id} value={d._id}>{d.name}</option>)
                                    }
                                </select><br></br>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='text-black'><span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Location:</Form.Label>
                                    <Form.Control type="text" name='location' placeholder="location" required />
                                </Form.Group>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <span className='pe-2' style={{ color: 'red', fontSize: '1.2rem' }}>*</span>Condition:<br></br>
                                        <Form.Check
                                            inline
                                            label="excellent"
                                            name="group1"
                                            value='excellent'
                                            type={type}
                                            id={`inline-${type}-1`}
                                            required
                                        />
                                        <Form.Check
                                            inline
                                            label="good"
                                            name="group1"
                                            value='good'
                                            type={type}
                                            id={`inline-${type}-2`}
                                            required
                                        />
                                        <Form.Check
                                            inline
                                            label="fair"
                                            name="group1"
                                            value='fair'
                                            type={type}
                                            id={`inline-${type}-3`}
                                            required
                                        />
                                    </div>
                                ))}
                            </Col>


                        </Row>







                        <Button className='my-3' style={{ backgroundColor: '#6B43FB', width: '130px', height: '40px', fontSize: '1.2rem', border: 'none' }} type="submit">
                            Create
                        </Button>
                        <ToastContainer />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;