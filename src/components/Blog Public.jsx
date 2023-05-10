import React from 'react'


const Blog_Public= () => {
  return (
    <div name='contact' className='w-full h-[800px] bg-[#081f3f] flex justify-center items-center p-4'>
        <div className='flex flex-col justify-center items-center w-full h-full max-w-[800px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-orange-600 text-white'>Blog</p>
                <p className='text-white text-xl py-4'>The blog is currently under construction.</p>
                <span className='text-white text-xl py-4'>I am currently in the process of creating this blog using 
                  <a href="https://quarto.org/"> <span className='text-[#ff9c69]'>Quarto</span> </a> 
                   to make writeups of my public projects accessible and interactive. 
                </span>
                <p className='text-white text-xl py-4'>I hope you return when there is more to see! I have plenty of stories to share 
                about life, the sciences, and the world of data.</p>
            </div>
        </div>
    </div>
  )
}

export default Blog_Public