import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

export default function NavModal({links})
{
    return ReactDOM.createPortal(
    <ul className="mini-nav">
        {links.map(
            link=>!link.sub
                ?<li>{link.title}</li>
                :<li className="flex">{link.title}<div className="drop"/></li>
            )}
        <Button text={'Get Started'} buttonClassName={'get-started-button'}/>
    </ul>
    ,
        document.querySelector('#NavModal')
    )
}