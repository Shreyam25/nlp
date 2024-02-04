import './App.css';
import bg from './bg.avif';
import './index.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';

function App() {
  const [mode, setMode] = useState('white');

  const toggleMode = () => {
    if (mode === 'black') {
      setMode('white');
      // document.body.style.backgroundColor = 'white';
    } else {
      setMode('black');
      // document.body.style.backgroundColor = 'black';

    }
  };

  return (
    
<div >
      <Navbar mode={mode} toggleMode={toggleMode} />
      
      <div className= {`xl:flex bg-${mode === 'black' ? 'blue-950' : 'gray-900'}`}>
        <div className="pt-40 pl-20 text-center lg:pt-20 md:pt-20 sm:pt-20">
          <div className="text-left max-w-3xl ">
            <p className="font-bold mb-6 text-gray-500 text-6xl">The Blog Summarizer</p>
            <p className="text-sm mb-8 text-slate-300 lg:text-left">
              <span className="text-gray-200 text-2xl font-bold">Streamline Your Reading, Amplify Your Learning</span>
              <br />
              <span className="text-amber-100 text-lg font-semibold">
                Where Blogs Shed the Excess and Readers Gain Express Access...
              </span>
              <br />
              Dive into Summaries for Quick Wit and Big Ideas, Because Life's Too Short for Long Reads!
            </p>
            <div className="LatestBlogs">
              <button className="bg-black px-3 py-2 font-bold rounded-2xl text-blue-50 hover:bg-gray-800 animate-bounce">
                Check out
              </button>
            </div>
          </div>
        </div>

        <div className="lg:justify-self-start">
          <img src={bg} className="w-full md:pt-1 md:pl-20" alt="Background" />
        </div>
      </div>
    </div>
  );
}

export default App;
