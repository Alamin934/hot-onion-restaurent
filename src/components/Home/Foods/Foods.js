import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Foods = (props) => {
    const { name, urlImage, price, description } = props.food;
    return (
        <div>
            <Col>
                <Card className="border-0 p-3 bg-white rounded w-75 mx-auto">
                    <Card.Img className="w-75 mx-auto" src={urlImage} />
                    <Card.Body>
                        <Card.Title className="fs-6 fw-bold mb-0">{name}</Card.Title>
                        <Card.Text className="text-muted mb-2">
                            <small>{description}</small>
                        </Card.Text>
                        <h5 className="fw-bold">${price}</h5>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Foods;