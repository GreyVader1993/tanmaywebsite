import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import ConnectBanner from '../partials/ConnectBanner';

function Connect() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      <ConnectBanner />

    </div>
  );
}

export default Connect;