import React, { useState, useEffect } from 'react'
import axios from "axios";
import './info.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import QuickView from './QuickView';



function Info({ id} : { id: number}) {

    const [movie, setMovie] = useState<any>([]);

    const [popup, setPopup] = useState(false);

    let fetchUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

    useEffect(() => {
        async function fecthData() {
            
            const request = await axios.get(fetchUrl);


            request.data.genres.map((genre:any)=> console.log(genre.name))
            console.log(request.data.genres)

            setMovie(
                request.data
            )
           return request;
        }
        fecthData();
    }, [fetchUrl])

    function handlePopup(){
        setPopup(
            !popup
        )
    }

    


    function RandomNB(){

        return <span>{Math.floor(Math.random() * (101-75))+75}</span>
    }

    return(
        <div key={`${movie.id}`} id={`${movie.id}`} className={'info'}>
        
            <div className='AllIcon'>
                <div className='before'>
                    <PlayCircleOutlineIcon />
                    <ThumbUpOffAltIcon />                
                    <AddCircleOutlineIcon/>
                </div>

                <div className='after' onClick={handlePopup} >
                    <QuickView id={movie.id} trigger={popup}/>
                    
                </div>
            </div>
            <div className='InfoSupp'>
                <p>Recommandé à {RandomNB()}%</p> <p>{movie?.runtime} minutes</p>
    
            </div>

            <div className='genre'>
                {movie.genres?.map((genre:any) => 
                     <span>{genre?.name} </span>
                )}
            </div>
            
            
        </div>
);
}

export default Info;