import React, {useState} from "react";
import Button from "./Button";
import './Navigation.css'
import NavModal from "./NavModal";

export default function Navigation()
{
    const links = [
        {title:'Home'},
        {title:'About'},
        {title:'Services'},
        {title:'Portfolio'},
        {title:'Team'},
        {title:'Pricing'},
        {title:'DropDown', sub:true},
        {title:'Contact'},
    ]

    const [navHidden, setNavHidden] = useState(true);


    return (
        <div className="nav-container">
            <div className="logo">OnePage</div>
            <nav>
                <ul>
                    {links.map(
                        link=>!link.sub
                            ?<li>{link.title}</li>
                            :<li className="flex">{link.title}<div className="drop"/></li>
                        )}
                    <Button text={'Get Started'} buttonClassName={'get-started-button'}/>
                </ul>
            </nav>
            <div className="navi-min" onMouseEnter={()=>setNavHidden(false)} onMouseLeave={()=>setNavHidden(true)}>III{!navHidden?<NavModal links={links}/>:null}</div>
        </div>
    )
}