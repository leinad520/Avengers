import {avengers} from './avengersData.js'
import {Link, useHistory} from 'react-router-dom';
import React from 'react';

function AvengersList() {
const history = useHistory();

    return (
        <>
        <h1>
            {avengers.map(item => <Link to={`/avengers/${item.id}`}><li>{item.name}</li></Link>)}
        </h1>
        <button onClick={() => history.goBack()}>Go back</button>
        </>
    )
}

export default AvengersList;
