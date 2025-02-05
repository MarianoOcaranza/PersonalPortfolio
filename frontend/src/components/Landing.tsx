import React from "react"
import Image from '../assets/main.jpeg'
import Button from "./common/Button"

const Landing: React.FC = () => {
    return (
        <>
        <div className='flex flex-col lg:flex-row md:items-center md:min-h-screen'>
            <div className='m-auto max-w-full min-h-60 p-10'>
                <h1 className="text-6xl font-bold">I'm Mariano Ocaranza!</h1>
                <p className="text-2xl">IT Student</p>
                <p className="text-2xl">Developer</p>
                <div className="flex gap-4 mt-3">
                <Button
                    buttonroute="/about"
                    text='Read more'
                    target=''
                />
                 <Button 
                    buttonroute="/projects"
                    text='See my projects'
                    target=''
                />
                </div>
                
            </div>
            <img src={Image} className="lg:w-1/4 w-1/2 object-cover max-w-full m-auto rounded shadow-xl shadow-black" alt="" />
        </div>
        </>
    )
}

export default Landing;