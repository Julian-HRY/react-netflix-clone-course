/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {FilmB as film}  from './MovieB'
import { Link } from "react-router-dom";

// export default () => <div>My App</div>;

function App(){
    return(
        <div>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/home">home</Link>
            <Link to="/MyList">My List</Link>
            
            {film.map((data, key) => {
                return(
                    <div key={key}>
                        {
                            data.original_title
                        }
                        
                        <img src={'https://image.tmdb.org/t/p/w200' + data.backdrop_path}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default App;