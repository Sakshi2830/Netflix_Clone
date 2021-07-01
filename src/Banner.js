import React, { useEffect, useState } from 'react'
import "./Banner.css"
import requests from "./Request"
import axios from './axios'

function Banner() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, [])
console.log(movies)


    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <header
         className="banner"
         style={{
             backgroundSize: "cover",
             backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
             backgroundPosition: "center center"
         }}
         >
<div className="banner__contents">
<h1 className="banner__title">
    {movies?.title || movies?.name || movies?.original_name}
</h1>
<div className="banner__buttons">
    <button className="banner__button">Play</button>
    <button className="banner__button">My List</button>
</div>
<h1 className="banner__description">{truncate(movies?.overview,200)}</h1>
</div>
<div className="banner--fadeBottom"/>
         </header>
    )
}

export default Banner;
