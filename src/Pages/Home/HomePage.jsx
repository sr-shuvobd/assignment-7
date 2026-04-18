import React from 'react';
import Hero from './Hero';
import Card from './Card';

const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <div className="divider"></div>
            <Card></Card>
        </div>
    );
};

export default HomePage;