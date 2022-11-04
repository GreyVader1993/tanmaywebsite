import React, { useState } from 'react';

function ConnectBanner() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-end text-center font-normal text-xl mx-6 sm:max-w-lg">
        Hello!<br />
        I am a full time technologist and part time creative interested in the intersection of technology and design.
        I am interested in working on products that have a positive impact on the world.
        <br /><br />
        I consider myself an amateur photographer, a decent cook, and a mediocre Latte artist.
        I am a big fan of the outdoors and love to travel.
        I would accept bribes in the form of coffee, tacos, or a good book.
        <br />
      </div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-800 transform translate-y-1/2"></div>
    </section>
  );
}

export default ConnectBanner;