import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#081b36]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ce834a]'>
          Welcome!
        </h1>
        <h2 className='text-3xl sm:text-3xl font-bold text-[#99c3ff]'>
          My name is 
        </h2>
        <h2 className='text-3xl sm:text-3xl font-bold text-[#ffffff]'>
          Spencer Grewe
        </h2>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#99c3ff]'>
          I am a Data Scientist working toward a Master's degree at American University.
        </h2>
        <p className='text-[#cce0ff] py-4 max-w-[600px]'>
          I am interested in applying data science to problems in business, healthcare, and the public sector. I am also interested in 
          exploring effective and creative data visualizations such as interactive figures, simulations, and animations.
        </p>
        <div>

        </div>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#99c3ff]'>
          I have 5+ years of experience in academic research and science communication.
        </h2>
        <p className='text-[#cce0ff] py-4 max-w-[700px]'>
          That means you can count on me to work through the data, collaborate with experts, and present the big ideas to 
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            Check out some of my work!
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
