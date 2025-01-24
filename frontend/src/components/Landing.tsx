import React from "react"
import Image from '../assets/defaultimage.png'
import Button from "./common/Button"

const Landing: React.FC = () => {
    return (
        <>
        <div className='flex flex-col lg:flex-row md:items-center md:min-h-screen'>
            <div className='m-auto max-w-full min-h-60 p-10'>
                <h1 className="text-6xl font-bold">I'm Mariano Ocaranza!</h1>
                <p className="text-xl">Computer Science student</p>
                <p className="text-2xl">Web Development</p>
                <p className="text-2xl">Data Analytics</p>
                <div className="flex gap-4 mt-3">
                <Button
                    buttonroute="/about"
                    text='Read more'
                />
                 <Button 
                    buttonroute="/projects"
                    text='See my projects'
                />
                </div>
                
            </div>
            <img src={Image} className="w-full lg:w-1/3 md:w-3/4 object-cover max-w-full m-auto rounded shadow-2xl shadow-black" alt="" />
        </div>
        </>
    )
}

export default Landing;