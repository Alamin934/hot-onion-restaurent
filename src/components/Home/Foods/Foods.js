import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Foods = (props) => {
    const { name, urlImage, price, details, id } = props?.food;
    const history = useHistory();
    const handleFoodDetail = () => {
        history.push(`/foodDetail/${id}`);
    }
    return (
        <div>
            <Col>
                {/* <NavLink to={`/foodDetail/${id}`}>
                </NavLink> */}
                <button type="submit" className="btn" onClick={handleFoodDetail}>
                    <Card className="border-0 p-3 bg-white rounded w-75 mx-auto">
                        <Card.Img className="w-75 mx-auto" src={urlImage} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '15px' }} className="mb-0">{name}</Card.Title>
                            <Card.Text className="text-muted mb-2">
                                <small>{details}</small>
                            </Card.Text>
                            <h5 className="fw-bold">${price}</h5>
                        </Card.Body>
                    </Card>
                </button>
            </Col>
        </div >
    );
};

export default Foods;