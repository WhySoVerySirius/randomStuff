import React from "react";
import Button from "./Button";
import Card from "./Card";
import './Home.css';

export default function Home()
{
    return (
        <div className="home-container">
            <div className="home-inner-container">
                <h1 className="home-title">one page bootstrap website template</h1>
                <p className="home-para">We are team of talented designers</p>
                <Button text={'Get Started'} buttonClassName={'get-started-button'}/>
            </div>
            <div className="home-cards">
                <Card title={'Lorem ipsum'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sequi.'}/>
                <Card title={'Sed ut perspiciatis'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <Card title={'Magni Dolores'} text={'Enim vel, nemo asperiores quis quisquam harum at possimus assumenda'}/>
                <Card title={'Nemo Enim'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sit.'}/>
            </div>
        </div>
    )
}