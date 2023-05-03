import React from 'react';
import py_logo from '../assets/projects/python.png';
import R_logo from '../assets/projects/R.png';
import matlab_logo from '../assets/projects/matlab.png';
import mysql_logo from '../assets/projects/mysql.png';
import msaccess_logo from '../assets/projects/msaccess.png';
import msexcel_logo from '../assets/projects/msexcel.png';
import react_logo from '../assets/projects/react.png';
import JS_logo from '../assets/projects/javascript.png';
import HTML_logo from '../assets/projects/html.png';
import tableau_logo from '../assets/projects/html.png';
import Github_logo from '../assets/projects/github.png';
import { proj_data } from "../data/data.js";


const Projects = () => {
    // projects file
    const project = proj_data;
    //setProject(data); 
return (
<div name='Projects' className='w-full h-auto bg-[#081b36] text-gray-300'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
      <div>
        <p className='text-4xl font-bold inline border-b-2 text-gray-300 border-orange-600'>Skills</p>
        <p className='py-6 text-2xl'>Here are some major programs, tools, and languages I've used in my work:</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={py_logo} alt="Python logo" />
          <p className='my-4 text-xl'>Python</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={R_logo} alt="R logo" />
          <p className='my-4 text-xl'>R</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={matlab_logo} alt="MATLAB logo" />
          <p className='my-4 text-xl'>MATLAB</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={mysql_logo} alt="MySQL logo" />
          <p className='my-4 text-xl'>MySQL</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={msaccess_logo} alt="Access logo" />
          <p className='my-4 text-xl'>Microsoft Access</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={msexcel_logo} alt="Excel logo" />
          <p className='my-4 text-xl'>Microsoft Excel</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={react_logo} alt="React logo" />
          <p className='my-4 text-xl'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={JS_logo} alt="JS logo" />
          <p className='my-4 text-xl'>JavaScript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={HTML_logo} alt="HTML logo" />
          <p className='my-4 text-xl'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <p className='my-4 text-xl'>Tableau</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Github_logo} alt="Github logo" />
          <p className='my-4 text-xl'>Github</p>
      </div>
    </div>
  </div>
  <div name='projects' className='w-full h-screen text-gray-300 bg-[#081b36]'>
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
