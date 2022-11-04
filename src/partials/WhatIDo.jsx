import React, { useState } from 'react';

function WhatIDo() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-end text-center font-normal text-xl mx-6 sm:max-w-lg">
        I do spend a lot of time on my computer <br />
        Somethings I do in my Spare Time <br /><br />

        <span className='text-left uppercase text-base font-semibold'>Trying to understand if Chewbacca was just cribbing about the dysfunctional Skywalker family <br /></span>
        <div class="w-full bg-gray-200 rounded-full my-4">
          <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full shadow-md" style={{width: '50%'}}>25%</div>
        </div>

        <span className='text-left uppercase text-base font-semibold'>Click Pictures on my Camera <br /></span>
        <div class="w-full bg-gray-200 rounded-full my-4">
          <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full shadow-md" style={{width: '70%'}}>35%</div>
        </div>

        <span className='text-left uppercase text-base font-semibold'>If Dinosaurs were smart creatures <br /></span>
        <div class="w-full bg-gray-200 rounded-full my-4">
          <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full shadow-md" style={{width: '50%'}}>25%</div>
        </div>

        <span className='text-left uppercase text-base font-semibold'>Visualizing Wakanda(n) Tech <br /></span>
        <div class="w-full bg-gray-200 rounded-full my-4">
          <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full shadow-md" style={{width: '30%'}}>15%</div>
        </div>

        <div className="max-w-xs mx-auto sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
          <div>
            <a href="/work" className="btn text-black font-semibold border-black bg-white hover:bg-gray-900 hover:text-white w-full sm:w-32 my-4 sm:ml-4">CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;