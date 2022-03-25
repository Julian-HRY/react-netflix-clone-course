/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {FilmB as film}  from '../../MovieB'
import { Link } from "react-router-dom";
import Row from './Row/Row';
import requests from '../../config/Requests';
import Banner from './banner';
import Nav from './Nav';

// export default () => <div>My App</div>;

function Home(){
    return(
        <div>
            {/* <Link to="/login">Login</Link> |{" "}
            <Link to="/home">home</Link>
            <Link to="/MyList">My List</Link> */}

            <Nav />
            <Banner />
            
            <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals}  IsLargeRow={true} />
            <Row title="trending Now" fetchUrl={requests.fetchTrending} IsLargeRow={false} />
            <Row title="Action movies" fetchUrl={requests.fetchActionMovies} IsLargeRow={false} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} IsLargeRow={false} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} IsLargeRow={false} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} IsLargeRow={false} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} IsLargeRow={false} />
            {/* {film.map((data, key) => {
                return(
                    <div key={key}>
                        {
                            data.original_title
                        }
                        
                        <img src={'https://image.tmdb.org/t/p/w200' + data.poster_path}></img>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Home;