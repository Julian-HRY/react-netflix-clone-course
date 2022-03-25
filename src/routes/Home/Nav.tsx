import React, { useEffect, useState } from 'react';
import './nav.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import CircleNotificationsSharpIcon from '@mui/icons-material/CircleNotificationsSharp';

function Nav(){

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });

    }, [])

    return(
        <div className={`${show ? 'nav_black' : 'nav'}`}>
            <div className='nav_front'>
                <img
                    className='nav_logo' 
                    src="./img/net.png"
                    alt='Netflix Logo'
                />

                <nav className='nav_links'>
                    <Link className='link' to="/home">Home</Link>
                    <Link className='link' to="/home">Series</Link>
                    <Link className='link' to="/home">Movies</Link>
                    <Link className='link' to="/home">Most watched novelty</Link>
                    <Link className='link' to="/home">My list</Link>
                </nav>
            </div>


            <div className='nav_end'>
                <SearchIcon className='icon'/>

                <span>DIRECT</span>
                <span>Youth</span>
                
               <CircleNotificationsSharpIcon className='icon' />

                <img
                    className='nav_avatar'
                    src='./img/logo-avatar.png'
                    alt='Avatar Logo'
                />
            </div>

            
        </div>
    )
}

export default Nav;