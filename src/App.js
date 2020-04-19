import React from 'react';
import MemberHeader from './components/MemberHeader/MemberHeader';
import NavMenu from './components/NavMenu/NavMenu';
import BannerMessage from './components/BannerMessage/BannerMessage';

function App() {
  return (
    <div className="App">
      <MemberHeader />
      <NavMenu />
      <BannerMessage />
    </div>
  );
}

export default App;
