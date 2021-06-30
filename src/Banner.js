import React from 'react'
import "./Banner.css"
function Banner() {

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <header
         className="banner"
         style={{
             backgroundSize: "cover",
             backgroundImage: `url("https://i.pinimg.com/736x/62/cb/b8/62cbb8138fd6c38a72198e09859a5426.jpg")`,
             backgroundPosition: "center center"
         }}
         >
<div className="banner__contents">
<h1 className="banner__title">Movie Name</h1>
<div className="banner__buttons">
    <button className="banner__button">Play</button>
    <button className="banner__button">My List</button>
</div>
<h1 className="banner__description">{truncate(`This is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test DescriptionThis is Test Description`,150)}</h1>
</div>
<div className="banner--fadeBottom"/>
         </header>
    )
}

export default Banner;
