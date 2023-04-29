import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen*2 bg-[#081b36]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ce834a]'>
          Welcome!
        </h1>
        <h2 className='text-3xl sm:text-3xl font-bold text-[#ffffff]'>
          My name is Spencer Grewe
        </h2>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#a4c9ff]'>
          I am a Data Scientist working toward a Master's degree at American University.
        </h2>
        <p className='text-[#ffffff] py-4 max-w-[600px]'>
          I am interested in applying data science to problems in business, healthcare, and the public sector. I am also interested in 
          exploring effective and creative data visualizations such as interactive figures, simulations, and animations.
        </p>
      </div>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen*0.5'>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#a4c9ff]'>
          I have 5+ years of experience in academic research and science communication.
        </h2>
        <p className='text-[#ffffff] py-4 max-w-[700px]'>
          That means you can count on me to work through the data, collaborate with experts, and present the big ideas clearly.
        </p>
        <div>
          <button className='text-white text-xl group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-white-600'>
            Take a look at some of my work!
            <HiArrowNarrowRight className='ml-3 ' />
          </button>
        </div>
      </div>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen*0.5'>
        <div>
          c
        </div>
      </div>
    </div>
  );
};

export default Home;
