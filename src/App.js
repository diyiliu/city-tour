import React from 'react';
import './App.scss';

import Navbar from "./component/Navbar";
import TourList from "./component/TourList";

function App() {
  return (
      <main>
          <Navbar />
          <TourList />
      </main>
  );
}

export default App;
