// GameView.jsx
import React from 'react';
import RockPaperScissors from '../rock_paper_scissors'; 

const GameView = ({
  userName,
  userChoice,
  setUserChoice,
  userScore,
  setUserScore,
  cpuScore,
  setCpuScore,
  gameHistory,
  setGameHistory,
}) => {
  // Create an instance of RockPaperScissors
  const rps = new RockPaperScissors(userName);

  // Handle play button click
  const handlePlay = () => {
    // Implement game logic here
    const cpuChoice = rps.generateCPUResponse();
    rps.play(userChoice);

    // Update scores and game history
    setUserScore(rps.score.user);
    setCpuScore(rps.score.cpu);
    setGameHistory([...gameHistory, `User: ${rps.score.user} v CPU: ${rps.score.cpu}`]);
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
      </form>
    </div>
  );
};

export default GameView;
