import React from 'react';
import HTML_logo from '../assets/html.png';
import react_logo from '../assets/react.png';
import Github_logo from '../assets/github.png';
import { data } from "../data/data.js";


const Projects = () => {
    // projects file
    const project = data;
    //setProject(data); 
return (
  <div name='stack' className='w-full h-screen bg-[#081b36] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl font-bold inline border-b-2 text-gray-300 border-orange-600'>Skills</p>
        <p className='py-6 text-2xl'>Here are a few technologies I've used:</p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <p className='my-4'>Python</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <p className='my-4'>R</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <p className='my-4'>MATLAB</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <p className='my-4'>MySQL</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <p className='my-4'>Microsoft Access</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <p className='my-4'>Microsoft Excel</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={react_logo} alt="React logo" />
          <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={HTML_logo} alt="HTML logo" />
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Github_logo} alt="Github logo" />
          <p className='my-4'>Github</p>
      </div>
    </div>
  </div>
  <div name='projects' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-2 text-gray-300 border-orange-600'>
          Projects
        </p>
        <p className='py-6 text-2xl'>Here are a few projects I've been working on:</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">

        {project.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                      flex justify-center text-center items-center mx-auto content-div "
          >

          <div className="opacity-0 group-hover:opacity-100 ">
            <span className="text-2xl font bold text-white tracking-wider ">
              {item.title}
            </span>
            <div>
              <span className="font italic text-white max-w-[40px]">
                {item.description}
              </span>
            </div>
            <div className="pt-8 text-center ">

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
