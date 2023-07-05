
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';


const Products = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <Container>
            <Row className='g-3'>
                {
                    data?.length ? <h5 className='text-center pt-4 pb-2'>Total results found: <span style={{ color: '#6B43FB' }}>{data.length}</span></h5> :
                        <h5 className='text-center pt-4 pb-2' style={{ color: 'red' }} >No items found!</h5>
                }
                {
                    data.map(data => <ProductCard data={data} key={data._id}></ProductCard>)
                }
            </Row>
        </Container>
    );
};

export default Products;