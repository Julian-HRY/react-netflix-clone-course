import React, { useState, useEffect } from 'react'
import axios from "axios";
import './QuickView.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Popup from 'reactjs-popup';


function QuickView({id, trigger} : { id: number, trigger: boolean}) {

    const [movie, setMovie] = useState<any>([]);


    let fetchUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

    useEffect(() => {
        async function fecthData() {
            
            const request = await axios.get(fetchUrl);

            request.data.genres.map((genre:any)=> console.log(genre.name))

            setMovie(
                request.data
            )
           return request;
        }
        fecthData();
    }, [fetchUrl])


    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original${
            movie.backdrop_path
        }")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }



    function RandomNB(){

        return <span>{Math.floor(Math.random() * (101-75))+75}</span>
    }

    return(


        <Popup trigger={<KeyboardArrowDownIcon />} position="top left">
          {(close:any) => (
            <div className='all'>
              <a className="close" onClick={close}>
                &times;
              </a>
              
                <div className="image_partie" style={bannerStyle}>
                    <h1 className="banner_title">
                        {movie.title}
                    </h1>
                    <div className="banner_buttons">
                        <div className='avant'>
                            <button className="banner_button banner_button-play">
                                <PlayArrowIcon /> Lecture
                            </button>
                            <AddCircleOutlineIcon />
                            <ThumbUpOffAltIcon />
                        </div>
                        
                        <div className='apres'>
                            <VolumeUpIcon />
                        </div>
                    </div>  
                </div>
                <div className='info_partie'>
                    <div className='info'>
                            <div className='InfoSupp'>
                                <p>Recommandé à {RandomNB()} %  </p><p>{movie?.runtime} minutes</p>

                                <p className="banner_description">
                                    {movie.description}
                                </p>
                
                            </div>

                            <div className='genre'>
                                {movie.genres?.map((genre:any) => 
                                    <span>{genre?.name} </span>
                                
                                )}
                            </div>
                    </div>
                    
                 </div>  
                </div>
          )}
        </Popup>
        
      
);
}

export default QuickView;