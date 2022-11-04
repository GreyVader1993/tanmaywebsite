import React from 'react';
import { Link } from 'react-router-dom';

function WorkBanner() {
  return (
      <section>
        <div className="flex flex-col justify-center mt-48 sm:mt-96 mx-auto max-w-md sm:max-w-2xl lg:max-w-5xl">
        <h1 class="text-left uppercase font-bold text-xl md:text-3xl ml-4">Education</h1>
          <div className='border-t border-black w-full mx-4 my-2 max-w-md sm:max-w-2xl lg:max-w-5xl'></div>
          <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
            <h1 className='text-left uppercase font-bold text-base md:text-lg ml-4'>
              New York University <br />
              <span className='text-gray-700'>Sep 2018 - May 2020</span>
            </h1>
            <h1 className='lg:text-right uppercase font-bold text-base md:text-lg ml-4'>
              Masters of Science<br />
              <span className='text-gray-700'>Computer Science</span>
            </h1>
          </div>
          <div className='border-t border-black w-full mx-4 my-2 max-w-md sm:max-w-2xl lg:max-w-5xl'></div>
          <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
            <h1 className='text-left uppercase font-bold text-base md:text-lg ml-4'>
              Pune Institute of Computer Technology <br />
              <span className='text-gray-700'>Aug 2012 - Jun 2016</span>
            </h1>
            <h1 className='lg:text-right uppercase font-bold text-base md:text-lg ml-4'>
              Masters of Science<br />
              <span className='text-gray-700'>Computer Science</span>
            </h1>
          </div>
          <h1 class="text-left uppercase font-bold text-xl md:text-3xl ml-4 mt-4">WORK</h1>
          <div className='border-t border-black w-full mx-4 my-2 max-w-md sm:max-w-2xl lg:max-w-5xl'></div>
          <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
            <h1 className='text-left uppercase font-bold text-base md:text-lg ml-4'>Full Stack Engineer</h1>
            <h1 className='lg:text-right uppercase font-bold text-base md:text-lg ml-4'>
              DigitalSurgeons LLC <br />
              <span className='text-gray-700'>Mar 21 - Nov 22</span>
            </h1>
          </div>
          <div className='border-t border-black w-full mx-4 my-2 max-w-md sm:max-w-2xl lg:max-w-5xl'></div>
          <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
            <h1 className='text-left uppercase font-bold text-base md:text-lg ml-4'>Full Stack Engineer</h1>
            <h1 className='lg:text-right uppercase font-bold text-base md:text-lg ml-4'>
              Mandeo Consultancy Services LLC <br />
              <span className='text-gray-700'>Jul 20 - Mar 22</span>
            </h1>
          </div>
          <div className='border-t border-black w-full mx-4 my-2 max-w-md sm:max-w-2xl lg:max-w-5xl'></div>
          <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
            <h1 className='text-left uppercase font-bold text-base md:text-lg ml-4'>Graduate Assistant</h1>
            <h1 className='lg:text-right uppercase font-bold text-base md:text-lg ml-4'>
              New York University <br />
              <span className='text-gray-700'>Aug 19 - May 20</span>
            </h1>
          </div>
          <div className='border-t border-black w-full mx-4 my-2 max-w-md sm:max-w-2xl lg:max-w-5xl'></div>
          <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
            <h1 className='text-left uppercase font-bold text-base md:text-lg ml-4'>QA Engineer</h1>
            <h1 className='lg:text-right uppercase font-bold text-base md:text-lg ml-4'>
              Ubisoft Entertainment India <br />
              <span className='text-gray-700'>Jun 16 - May 17</span>
            </h1>
          </div>
          <div className='border-t border-black w-full mx-4 my-2 max-w-md sm:max-w-2xl lg:max-w-5xl mb-6'></div>
        </div>
      </section>
  );
}

export default WorkBanner;
