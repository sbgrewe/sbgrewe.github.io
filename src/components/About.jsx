import React from 'react';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#081b36] text-gray-300' >
      <div className='flex flex-col justify-center items-center w-full h-full' style={{ overflow: 'auto' }}>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
              About Myself
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>I am a student in American University's Data Science MS program on campus in Washington, D.C, and I made this site to present my progess as a data scientist.</p>
            </div>
            <div>
              
            </div>
            <div>
              
            </div>
            <div>
            <p>
                I received my bachelor's degree from James Madison Unversity, and my master's from the University of Virginia. I carried out research in 
                computational biophysics and biochemistry for about 4 years while working in STEM education before exploring a career in data science.
            </p>
            </div>
            <div>
            <p>
                I am interested in aligning data science practices with problems in business, healthcare, and the public sector. I am also interested in 
                exploring effective and creative applications of data visualizations, such as real-time simulations, animations, and interactive figures.
            </p>
            </div>
            <div>
              
            </div>
            <div>

            </div>
            <div>
              <p>
                Since beginning work in STEM education in 2015, I have been interested in art and visuals as a way to inform and entertain. I plan to continue leveraging 
                computer tools for the design of infographics.
              </p>
            </div>
            <div>
              <p>
                I lived in the Shenandoah valley for 7 years and still enjoy walking through trails and public parks in my spare time. 
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
