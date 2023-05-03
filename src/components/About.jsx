import React from 'react';


const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#081b36] text-gray-300' >
      <div className='flex flex-col justify-center items-center w-full h-full' style={{ overflow: 'auto' }}>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-2 border-orange-600'>
              About Myself
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>I am currently enrolled in American University's Data Science MS program in Washington, D.C, and I made this site to promote my progess as a data scientist.</p>
            </div>
            <div>
              
            </div>
            <div>
              
            </div>
            <div>
            <p>
                I previously studied chemistry at James Madison Unversity and the University of Virginia. I carried out research in computational biophysics and 
                biochemistry for about 4 years while working in STEM education before exploring a career in data science.
            </p>
            </div>
            <div>
            <p>
                I am interested in applying data science to open-ended problems in business, healthcare, and the public sector. I am also interested in 
                creating effective data visualizations, such as real-time simulations, animations, and interactive figures, to problems of all kinds.
            </p>
            </div>
            <div>
              
            </div>
            <div>

            </div>
            <div>
              <p>
                Since being exposed to STEM education, and later working as a teacher, I have been interested in using visuals as a way to inform audiences of 
                complex subjects.
              </p>
            </div>
            <div>
              <p>
                In addition to loving the arts and sciences, I lived in the Shenandoah valley for 7 years and still enjoy walking through trails and public parks in my spare time. 
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
