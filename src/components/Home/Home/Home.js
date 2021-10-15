import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import FIlterFoods from '../FIlterFoods/FIlterFoods';
import SearchFood from '../SearchFood/SearchFood';

const Home = () => {
    return (
        <div>
            <SearchFood></SearchFood>
            <FIlterFoods></FIlterFoods>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;