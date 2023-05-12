import React from 'react';
import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import LookingFor from '../LookingFor/LookingFor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Search></Search>
            <LookingFor></LookingFor>
        </div>
    );
};

export default Home;