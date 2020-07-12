import React from 'react';
import {useParams, useRouteMatch, NavLink, Route} from 'react-router-dom';


function Avenger({ hero }) {
    const params = useParams();
    // we can use this hook to grab information about the way React Router matched this route
    const {url, path} = useRouteMatch();

    // we want to match the hero to the route
    const heros = hero.find(item => item.id === Number(params.hero));
    return (
    <div className="characters-list-wrapper">
      <div className="character-card">
        <h2>{heros.name}</h2>
        <p>{heros.nickname}</p>
        <p>{heros.description}</p>
        <img src={heros.thumbnail} alt="random avengers img" />

        <nav className="nav-buttons">
          <NavLink to={`${url}/movies`}>Movie List</NavLink>
        </nav>
        <Route path={`${path}/movies`}>
          {heros.movies.map(item => <li>{item}</li>)}
        </Route>
      </div>
    </div>
    );
  }
  export default Avenger;