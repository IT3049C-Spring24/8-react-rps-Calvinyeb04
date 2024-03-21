// GameView.jsx
import React, { useState } from 'react';
import RockPaperScissors from '../rock_paper_scissors';

const GameView = ({
  userName,
  userScore,
  setUserScore,
  cpuScore,
  setCpuScore,
  gameHistory,
  setGameHistory,
}) => {
  const [userChoice, setUserChoice] = useState("");
  const rps = new RockPaperScissors(userName);

  const handlePlay = () => {
    if (!userChoice) {
      alert('Please select your choice.');
      return;
    }

    const cpuChoice = rps.generateCPUResponse();
    rps.play(userChoice);

    setUserScore(rps.score.user);
    setCpuScore(rps.score.cpu);
    setGameHistory([...gameHistory, `${userName}: ${userChoice} vs CPU: ${cpuChoice}`]);
  };

  const handleReset = () => {
    setUserScore(0);
    setCpuScore(0);
    setGameHistory([]);
  };

  return (
    <div id="game-screen">
      <div id="score-tally">
        <p id="score">{userName}: {userScore} v CPU: {cpuScore}</p>
      </div>
      <form id="game-form">
        <div className="form-group">
          <label htmlFor="user-selection">Select your choice: </label>
          <select
            className="custom-select"
            id="user-selection"
            name="user-selection"
            value={userChoice}
            onChange={(e) => setUserChoice(e.target.value)}
          >
            <option value="">Select</option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
          </select>
        </div>
        <button className="btn btn-primary" id="play-button" type="button" onClick={handlePlay}>
          Play
        </button>
        <button className="btn btn-secondary" id="reset-button" type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div id="game-history">
        <h2>Game History</h2>
        <ul>
          {gameHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameView;
