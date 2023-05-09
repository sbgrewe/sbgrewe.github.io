import React from 'react';
import '../assets/about_blog_other/IMG_0018.jpg';


const About = () => {
  return (
    <div name='About' className='w-full h-auto bg-[#081f3f] text-gray-300' >
      <div className='flex flex-col justify-center items-center w-full  h-[1100px]' style={{ overflow: 'auto' }}>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 ' >
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-2 border-orange-600 text-white'>
              About Myself
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold text-[#ffffff]'>
              <span>I am currently enrolled in
                <a href='https://www.american.edu/cas/mathstat/' className = 'text-[#ff9c69]'> American University's Data Science MS program </a>
              in Washington, D.C, and I made this site to promote my progess as a data scientist.</span>
            </div>
            <div>
              
            </div>
            <div>

            </div>
            <div className='sm:text-left text-[#ffffff]'>
              <span>
                  I previously studied chemistry at <a href='https://www.jmu.edu/index.shtml' className = 'text-[#ff9c69]'> James Madison University </a>and 
                  the<a href='https://www.virginia.edu/' className = 'text-[#ff9c69]'> University of Virginia</a>. I also carried out research in computational biophysics and 
                  biochemistry while working in STEM education as laboratory TA and a community educator.
              </span>
            </div>
            <div className='sm:text-right text-[#ffffff]'>
              <p>
                  I am interested in applying data science to open-ended problems in business, healthcare, and the public sector. I am also interested in 
                  creating effective visualizations, such as real-time simulations, animations, and interactive figures, toward data of all kinds.
              </p>
            </div>
            <div>
              
            </div>
            <div>

            </div>
            <div className='sm:text-left text-[#ffffff]'>
              <p>
                Through exposure to STEM education as a student and later as a teacher, I have been interested in using visuals as a way to inform audiences of 
                complex subjects.
              </p>
            </div>
            <div className='sm:text-right text-[#ffffff]'>
              <p>
                In addition to loving the arts and sciences, I lived in the Shenandoah valley for 7 years and still enjoy walking through trails and public parks in my spare time. 
              </p>
            </div>
            <div>
              <img src = '../assets/about_blog_other/IMG_0018.jpg' alt='Picture from the Shenandoahs' style={{width:128, height:128}} />
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
