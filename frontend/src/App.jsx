import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Awards from './pages/Awards';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Home />
        <Awards />
        {/* Add other sections as they are created */}
      </main>
    </div>
  );
};

export default App;