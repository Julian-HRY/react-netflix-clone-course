import requests from "../../config/Requests";
import axios from "axios";
import {useState, useEffect} from 'react';
import {FilmB as film}  from '../../MovieB'
import { Link } from "react-router-dom";
import './banner.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Banner(){
    const [movie, setMovie] = useState([]);
    const [background, setBackground] = useState([]);
    const [description, setDesciption] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        async function fecthData() {
            const request = await axios.get(requests.fetchTrending);

            // console.log(request.data.results)

            let num = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(
                request.data.results[
                    num
                ]
            )
            setBackground(
                request.data.results[
                   num
                ].backdrop_path
            )

            setDesciption(
                request.data.results[
                    num
                ].overview
            )

            setTitle(
                request.data.results[
                    num
                ].title
            )
        }
        fecthData();
    }, [])

    console.log(movie);
   

    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original${
            background
        }")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }

    return(
        <header className="banner" style={bannerStyle}>
            <div className="banner_content">
                <h1 className="banner_title">
                    {title}
                </h1>
                <p className="banner_description">
                    {description}
                </p>
                <div className="banner_buttons">
                    <button className="banner_button banner_button-play">
                        <PlayArrowIcon /> Lecture
                    </button>
                    <button className="banner_button">
                        <HelpOutlineIcon /> Plus d'infos                   
                    </button>
                </div>  
            </div>  
        </header>
    )
}

export default Banner;