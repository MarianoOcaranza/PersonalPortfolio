import React from "react"
import Image from '../assets/defaultimage.png'

const Landing: React.FC = () => {
    return (
        <>
        <div className='flex flex-col lg:flex-row md:items-center md:min-h-screen'>
            <div className='m-auto max-w-full min-h-60 p-10'>
                <h1 className="text-5xl font-bold">I'm Mariano Ocaranza!</h1>
                <p>Web Developer ReactJS + Django / .NET</p>
                <p>Computer Science student</p>
                <a href='/about'>
                    Read more
                </a>
                <a href="projects">
                    See my projects
                </a>
            </div>
            <img src={Image} className="w-full lg:w-1/3 md:w-3/4 object-cover max-w-full m-auto rounded shadow-2xl shadow-black" alt="" />
        </div>
        </>
    )
}

export default Landing;