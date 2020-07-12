import React from 'react';

function Home() {
    return (
        <>
        <h1>The Avengers</h1>
        <img className='avengersImage' src={require('../avengers-image.jpg')} alt="not working"></img>
        </>
    )
}

export default Home;