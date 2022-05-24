import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
                <Review></Review>
            
            
        </>
    );
};

export default Home;