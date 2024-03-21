// WelcomeView.jsx
import React from 'react';

const WelcomeView = ({ userName, setUserName, setIsGameStarted }) => {
  const handleStartGame = () => {
    // Check if username is provided
    if (!userName.trim()) {
      alert('Please enter your name.');
      return;
    }

    // Start the game
    setIsGameStarted(true);
  };

  return (
    <div id="welcome-screen">
      <form id="name-form">
        <div className="form-group">
          <label htmlFor="username">Type your name: </label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
            type="text"
            id="username"
            name="username"
            required
            placeholder="Enter Name Here..."
            minLength="2"
            maxLength="15"
          />
        </div>
        <button
          className="btn btn-primary"
          id="start-game-button"
          type="button"
          onClick={handleStartGame} 
        >
          Start Game!
        </button>
      </form>
    </div>
  );
};

export default WelcomeView;
