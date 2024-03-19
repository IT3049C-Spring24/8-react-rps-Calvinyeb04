import './App.css';



import React, { useState } from 'react'; // Import useState from 'react'
import WelcomeView from './components/WelcomeView'; // Import WelcomeView component
import GameView from './components/GameView'; // Import GameView component

function App() {
  const [userName, setUserName] = useState(""); // Declare userName state variable

  return (
    <div className="container"> {/* Change class to className */}
      <h1 className="mainHeader">Rock Paper Scissors</h1> {/* Change class to className */}
      {/* Pass userName and setUserName as props to WelcomeView component */}
      <WelcomeView userName={userName} setUserName={setUserName} />
      {/* Pass userName as prop to GameView component */}
      <GameView userName={userName} />
    </div>
  );
}

export default App;