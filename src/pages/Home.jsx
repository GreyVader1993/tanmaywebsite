import React from 'react';

import HeroHome from '../partials/HeroHome';
import HomePageFooter from '../partials/HomePageFooter';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
      </main>
      {/*  Site footer */}
      <HomePageFooter />

    </div>
  );
}

export default Home;