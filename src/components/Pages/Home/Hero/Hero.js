import React from 'react';
import Banner from '../Banner/Banner';
import Expert from '../Expert/Expert';
import Service from '../Service/Service';

const Hero = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <Expert/>
        </div>
    );
};

export default Hero;