import React, { useState } from 'react';

function HeroHome() {
  return (
    <section className="flex justify-center items-center bg-black h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-2xl text-white md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-50" data-aos="zoom-y-out">TANMAY DUREJA</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-3xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"><span class="mx-2">💻</span><span class="mx-2">⚽</span><span class="mx-2">🍽️</span><span class="mx-2">🧭</span><span class="mx-2">📷</span></p>
              <div className="max-w-xs mx-auto sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a href="/connect" className="btn text-white font-bold border-gray-50 bg-gray-900 hover:bg-white hover:text-gray-900 w-full sm:w-32 my-4 sm:ml-4">CONNECT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;