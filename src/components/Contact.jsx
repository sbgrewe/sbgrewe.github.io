import React from 'react'
import { contact_data } from "../data/data.js";



const Contact = () => {
  const contact_methods = contact_data;
  return (
  <div name='contact_page' className='w-full h-[1000px] bg-[#081f3f] items-center align-center justify-center'>
    <div name='contact' className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-[550px]'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-2 border-orange-600 text-white'>Contact</p>
        <p className='text-white py-4 text-xl'>Please contact me directly through any of the following channels:</p>
      </div>
    </div>

    <div style= {{ marginLeft: 500 }} className="grid grid-cols-1 grid-cols-3 gap-12 max-w-[800px]">
      {contact_methods.map((item, index) => (
          <div key={index} style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider ">
                {item.name}
              </span>

              <div className="pt-2 text-center ">
                <a href={item.link} target="_blank">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Contact
                  </button>
                </a>
              </div>

            </div>
          </div>
      ))}
    </div>
    </div>
  )
}

export default Contact