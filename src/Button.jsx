import React from "react";
import './Button.css'

export default function Button({text, buttonClassName})
{
    return <button className={buttonClassName}>{text}</button>
}