import React from "react";
import Button from "./common/Button";

const Contact: React.FC = ()=> {
    return (
        <>
        <div className='flex flex-col h-screen justify-center items-center'>
            <p>Coming soon :) in the meanwhile, you can contact me at marianoocaranza@gmail.com or via LinkedIn</p>
            <Button text='Visit my Linkedin!' buttonroute="https://www.linkedin.com/in/mariano-ocaranza-6a5b39235/" target='_blank'/>
        </div>
        </>
    )
}

export default Contact