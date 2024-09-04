import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className="container wrapper">
            <div className="Left">
                <h2 className="name">Acheampong Eric</h2>
                <span>toogle</span>
            </div>
            <div className="Right">
                <div className="list">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a> </li>
                        <li><a href="#">Experience</a> </li>
                        <li><a href="#">Porfolio</a> </li>
                        <li><a href="#">Testimonials</a> </li>
                    </ul>
                </div>
                <button className="button n-button">Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar