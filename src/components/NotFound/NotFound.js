import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="text-center">
            <img src={notFound} className="w-50 mx-auto d-block" alt="" />
            <NavLink to="/home">
                <button className="btn-red rounded py-2 my-4">Back to Home</button>
            </NavLink>
        </div>
    );
};

export default NotFound;