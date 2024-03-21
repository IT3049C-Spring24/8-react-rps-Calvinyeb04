import './App.css';



import React, { useState } from 'react'; 
import WelcomeView from './components/WelcomeView'; 
import GameView from './components/GameView'; 



function App() {
  const [userName, setUserName] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false); 
  const [userChoice, setUserChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  return (
    <div className="container">
      <h1 className="mainHeader">Rock Paper Scissors</h1>
      {}
      {isGameStarted ? (
        <GameView
          userName={userName}
          userChoice={userChoice}
          setUserChoice={setUserChoice}
          userScore={userScore}
          setUserScore={setUserScore}
          cpuScore={cpuScore}
          setCpuScore={setCpuScore}
          gameHistory={gameHistory}
          setGameHistory={setGameHistory}
        />
      ) : (
        <WelcomeView
          userName={userName}
          setUserName={setUserName}
          setIsGameStarted={setIsGameStarted}
        />
      )}
    </div>
  );
}

export default App;