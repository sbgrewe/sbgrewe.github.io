import React from 'react';
import { proj_data, skill_data } from "../data/data.js";
import './projects.css';


const Projects = () => {
    // projects file
    const project = proj_data;
    const skills = skill_data;
    //setProject(data); 
return (
<div name='projects_page' className='w-full h-[2200px] bg-[#081f3f] text-white'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-[1000px]'>
      <div>
        <p className='text-4xl font-bold inline border-b-2 border-orange-600'>Skills</p>
        <p className='py-6 text-2xl'>Here are some major programs, tools, and languages I've used in my work:</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
      {skills.map((item, index) => (
          <div key={index} className='icon_container'>
            <img className='icon_image' src={item.src} alt={item.alt} />
            <p className='my-4 text-xl'>{item.name}</p>
          </div>
          ))}
    </div>
  </div>
  <div name='projects' className='w-full h-screen text-white bg-[#081f3f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-2 border-orange-600 text-white'>
          Projects
        </p>
        <p className='py-6 text-2xl'>Here are a few projects I've been working on:</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-12">

        {project.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div "
          >
          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font-bold text-white tracking-wider ">
              {item.title}
            </span>
            <div className='max-w-[425px]'>
              <span className="pt-2 font italic text-white ">
                {item.description}
              </span>
            </div>
            <div className="pt-2 text-center ">
              <span className="text-white tracking-wider">
                Made with {item.tags}
              </span>
            </div>
            <div className="pt-2 text-center ">

              <a href={item.visit} target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-2 m-2
                            bg-white text-gray-700 font-bold text-lg"
                >
                  More Info
                </button>
              </a>
            </div>
          </div>
        </div>
          ))}
      </div>
    </div>
  </div>
</div>
  );
};

export default Projects;
