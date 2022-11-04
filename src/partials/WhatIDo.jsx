import React, { useState } from 'react';

function WhatIDo() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-end text-center font-normal text-xl mx-6 sm:max-w-lg">
        I do spend a lot of time on my computer <br />
        Somethings I do in my Spare Time <br /><br />

        <span className='text-left uppercase text-base font-semibold'>Trying to understand if Chewbacca was just cribbing about the dysfunctional Skywalker family <br /></span>
        <div class="w-full bg-gray-200 rounded-full my-4">
          <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full shadow-md" style={{width: '75%'}}>75%</div>
        </div>
        <span className='text-left uppercase text-base font-semibold'>If Dinosaurs were smart creatures <br /></span>
        <div class="w-full bg-gray-200 rounded-full my-4">
          <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full shadow-md" style={{width: '65%'}}>65%</div>
        </div>
        <span className='text-left uppercase text-base font-semibold'>Visualizing Wakanda(n) Tech <br /></span>
        <div class="w-full bg-gray-200 rounded-full my-4">
          <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full shadow-md" style={{width: '45%'}}>45%</div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-800 transform translate-y-1/2"></div>
    </section>
  );
}

export default WhatIDo;