import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataByCategory } from '../redux/apiSlices';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom'; 

const Rocket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const data = useSelector((state) => state.data.data);
  const categories = [
    'smileys-and-people',
    'animals-and-nature',
    'food-and-drink',
    'travel-and-places',
    'activities',
    'objects',
    'symbols',
    'flags',
  ];

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDataByCategory(categories[0])); 
    }
  }, [status, dispatch, categories]);

  const handleButtonClick = (category) => {
    dispatch(fetchDataByCategory(category));
    console.log(data)
    navigate('/groups'); 
  };

  return (
    <div className="container mt-4">
      {status === 'loading' && <p>Loading data...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <Row>
          {categories.map((category, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-3">
              <Link to="/Group">
                <Button variant="primary" block onClick={() => handleButtonClick(category)}>
                  {category}
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Rocket;
