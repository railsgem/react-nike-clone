import React from 'react';
import MemberHeader from './components/MemberHeader/MemberHeader';
import NavMenu from './components/NavMenu/NavMenu';
import BannerMessage from './components/BannerMessage/BannerMessage';
import HomePageGrid from './components/HomePageGrid/HomePageGrid';

function App() {
  return (
    <div className="App">
      <MemberHeader />
      <NavMenu />
      <BannerMessage />
      <HomePageGrid />
    </div>
  );
}

export default App;
