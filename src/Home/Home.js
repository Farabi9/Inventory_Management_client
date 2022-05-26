import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Company from './Company';
import Review from './Review';
import ShortComment from './ShortComment';
import Tools from './Tools';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Company></Company>
                <Review></Review>
                <ShortComment></ShortComment>
            
            
        </>
    );
};

export default Home;