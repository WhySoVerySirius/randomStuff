import React from "react";
import './Card.css';

export default function Card({img, title, text})
{
    return (
        <div className="card">
            <div className="home-card-image" style={{background: `url(${img})`}}></div>
            <p className="card-title">{title}</p>
            <p className="card-text">{text}</p>
        </div>
    )
}