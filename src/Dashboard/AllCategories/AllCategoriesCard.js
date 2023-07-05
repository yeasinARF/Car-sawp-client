import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import defaultImage from '../../Images/icar.png'
import BrandEdit from './BrandEdit/BrandEdit';
const AllCategoriesCard = ({ data, i, handleDelete }) => {
    const { name, img, _id } = data;
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
                        {name}
                    </td>
                    <td >
                        <PhotoProvider>
                            <PhotoView src={img ? img : defaultImage} >
                                <img src={img ? img : defaultImage} alt="product" style={{ height: '35px', width: '35px', borderRadius: '50%', cursor: 'pointer' }} />
                                {/* <img src={eye} alt='view' style={{height:'25px', width:'25px'}}/> */}
                            </PhotoView>
                        </PhotoProvider>
                    </td>
                    <td>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <BrandEdit data={data}></BrandEdit>
                            <span onClick={() => handleDelete(_id)} className='  fw-bold ' ><FaTrashAlt style={{ color: 'rgb(107, 67, 251)', cursor: 'pointer' }}></FaTrashAlt></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default AllCategoriesCard;