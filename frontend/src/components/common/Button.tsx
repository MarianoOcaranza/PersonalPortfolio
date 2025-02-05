import React from "react";

interface Props {
    buttonroute: string;
    text: string;
    target: string;
}

const Button: React.FC<Props> = (props)=> {
    return (
        <>
        <a className="bg-indigo-500 p-3 text-white shadow-lg hover:bg-blue-900 transition-all duration-300 rounded" href={props.buttonroute} target={props.target} rel="noopener noreferrer">
            {props.text}
        </a>
        </>
    )
}

export default Button;