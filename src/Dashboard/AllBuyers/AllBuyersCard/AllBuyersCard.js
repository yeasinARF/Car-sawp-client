import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Utilities/Context/UserContext';
import LoaderSpin from '../../../Utilities/Context/Loader/LoaderSpin';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import defaultImage from '../../../Images/admin.png'
const AllBuyersCard = ({ i,data, handleDelete }) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <LoaderSpin></LoaderSpin>;
    }
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
    );
};

export default AllBuyersCard;