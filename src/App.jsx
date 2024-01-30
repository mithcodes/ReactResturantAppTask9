import React, { useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App RUNNING');

  const toggleParagraph = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <button onClick={toggleParagraph}>Toggle Paragraph</button>
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
