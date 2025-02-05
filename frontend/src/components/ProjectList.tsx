import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';
import Button from './common/Button';

interface Project {
    id: number;
    title: string;
    description: string;
    source_code: string;
    preview: string;
    created_at: Date;
    category: string;
  }
  

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=> {
        axiosInstance.get('/projects/')
        .then(response=> {
            setProjects(response.data);
            setLoading(false);
        })
        .catch(error=>{
            console.error("There was an error fetching the project data: ", error);
            setLoading(false);
        });
    }, []);

    if(loading) {
        return <div>Loading projects...</div>;
    }

    return (
        <div className='flex max-h-fit justify-center flex-wrap gap-3'>
            {projects.map((project) => (
                <div key={project.id} className="max-w-xs border rounded-lg shadow-lg m-5">
                    <img src={project.preview} alt="" className="rounded-t-lg"/>
                    <div className='p-4 text-start'>
                        <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900"> {project.title}</h5>
                        <p className='text-xs text-gray-700'>Category: {project.category}</p>
                        <p className='mt-2 font-normal text-gray-700'>{project.description}</p>
                        <p className='mb-3 text-xs font-normal text-gray-700'>Uploaded: {new Date(project.created_at).toLocaleDateString()}</p>
                        <Button text='Source Code' buttonroute={project.source_code} target='_blank'/>
                    </div>
                </div>
            ))}
        </div>
    )
     
}

export default ProjectList