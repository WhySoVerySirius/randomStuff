import React from "react";
import Navigation from "./Navigation";

export default function Layout({children})
{
    return (
        <div className="main-container">
            <Navigation/>
            {children}
        </div>
    )
}