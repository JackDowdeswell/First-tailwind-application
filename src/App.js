import './App.css';
import { useState } from 'react'
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';

function App() {
  const [colour, setColour] = useState("text-white");
  return (
    <body className="bg-gray-700">
      <div className="flex">
        <Sidebar colour={colour} setColour={setColour} />
        <Home />
      </div>
    </body>

  );
}

export default App;
