import React from "react";
import Button from "./Button";
import './Navigation.css'

export default function Navigation()
{
    const links = [
        {title:'Home'},
        {title:'About'},
        {title:'Services'},
        {title:'Portfolio'},
        {title:'Team'},
        {title:'Pricing'},
        {title:'DropDown'},
        {title:'Contact'},
    ]


    return (
        <div className="nav-container">
            <div className="logo">OnePage</div>
            <nav>
                <ul>
                    {links.map(link=><li>{link.title}</li>)}
                    <Button text={'Get Started'} buttonClassName={'get-started-button'}/>
                </ul>
            </nav>
        </div>
    )
}