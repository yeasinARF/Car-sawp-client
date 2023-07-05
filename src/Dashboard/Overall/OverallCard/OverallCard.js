import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import useRole from '../../../useRole';
import { AuthContext } from '../../../Utilities/Context/UserContext';
import seller from '../../../Images/group.png';
import report from '../../../Images/items.png';
import products from '../../../Images/sugar-cubes.png';
import orders from '../../../Images/checkout.png';
import brands from '../../../Images/brand-image.png';


const OverallCard = ({currentSellers}) => {

    const { user } = useContext(AuthContext);
    const [currentUser] = useRole(user);
    return (
        <>
            


        </>

    );
};

export default OverallCard;