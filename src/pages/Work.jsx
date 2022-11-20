import React from 'react';

import HeaderAlt from '../partials/HeaderAlt';
import WorkBanner from '../partials/WorkBanner';
import HomePageFooter from '../partials/HomePageFooter';

function Work() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <HeaderAlt />
      <WorkBanner />
      <HomePageFooter />

    </div>
  );
}

export default Work;