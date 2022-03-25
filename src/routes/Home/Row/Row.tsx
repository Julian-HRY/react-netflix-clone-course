import React, { useState, useEffect } from 'react'
import axios from "axios";
import './row.css';
import Info from './Info';

function Row({title,fetchUrl, IsLargeRow} : {title:string, fetchUrl:string, IsLargeRow:boolean}){
    



    const [movies, setMovies] = useState([]);

    const [popup, setPopup] = useState(false);   

    useEffect(() => {
        async function fecthData() {
            console.log(fetchUrl)
            const request = await axios.get(fetchUrl);

            console.log(request.data.results)

            setMovies(
                request.data.results
            )
           return request;
        }
        fecthData();
    }, [fetchUrl])

    return(
        <div>
            <h2 className='title'>{title}</h2>

            <div className='row__posters'>
                {movies.map((movie: any) => (
                    <div className={`${IsLargeRow ? "row__posterLarge" : "row__poster"}`} onMouseEnter={()=>setPopup(true)} onMouseLeave={()=>setPopup(false)}>
                        <img 
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/w500${IsLargeRow ? movie.poster_path : movie.backdrop_path }`}
                            alt={movie?.title || movie?.original_title || movie?.name || movie?.original_name}
                            
                        />
                        <div className="info" >
                            <Info key={movie.id} id={movie.id}/>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Row;
