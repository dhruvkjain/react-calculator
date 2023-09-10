import React from "react";
import './Button.css';

const Button = ({id,text,onPress})=>{
    return (
        <div className={id}>
            <button className="btn" onClick={onPress}>{text}</button>
        </div>
    );
}
export default Button;