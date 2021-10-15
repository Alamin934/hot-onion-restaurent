import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './SearchFood.css';

const SearchFood = () => {
    return (
        <div id="search-bg" className="text-center d-flex align-items-center">
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-5 mb-4">Best food waiting for your belly</h1>
                        <div className="search-field">
                            <InputGroup className="mb-3">
                                <FormControl style={{ padding: '10px' }} className="rounded-pill position-relative border-0" placeholder="Search food items" />
                                <button className="btn-red">Search</button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default SearchFood;