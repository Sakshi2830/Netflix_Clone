import React from 'react'
import "./Banner.css"
function Banner() {
    return (
        <header
         className="banner"
         style={{
             backgroundSize: "cover",
             backgroundImage: `url("https://torranceca.files.wordpress.com/2019/10/netflix.jpg")`,
             backgroundPosition: "center center"
         }}
         ></header>
    )
}

export default Banner;
