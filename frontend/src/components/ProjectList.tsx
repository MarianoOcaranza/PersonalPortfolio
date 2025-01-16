import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';

interface Project {
    id: number;
    title: string;
    description: string;
    preview: string;
    created_at: Date;
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
        <div className='flex max-h-fit items-start justify-center lg:justify-start flex-wrap gap-4'>
            {projects.map((project) => (
                <div key={project.id} className="max-w-xs border rounded-lg shadow-lg">
                    <img src={project.preview} alt="" className="rounded-t-lg"/>
                    <div className='p-4 text-start'>
                        <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900"> {project.title}</h5>
                        <p className='mt-2 font-normal text-gray-700'>{project.description}</p>
                        <p className='mb-3 text-xs font-normal text-gray-700'>Uploaded: {new Date(project.created_at).toLocaleDateString()}</p>
                        <p>Visit site!</p>
                        <p>Visit Source Code</p>
                    </div>
                    
                </div>

            ))}
        </div>
    )
     
}

export default ProjectList