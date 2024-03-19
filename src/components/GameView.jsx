const GameView = (props) => {
    return (
      <div id="game-screen">
        <div id="score-tally">
          <p id="score"> User: 0 v CPU: 0</p>
        </div>
  
        <form id="game-form">
          <div className="form-group">
            <label htmlFor="user-selection">Select your choice: </label>
            <select
              className="custom-select"
              id="user-selection"
              name="user-selection"
            >
              <option id="rock" value="rock">
                Rock
              </option>
              <option id="paper" value="paper">
                Paper
              </option>
              <option id="scissors" value="scissors">
                Scissors
              </option>
            </select>
          </div>
          <button className="btn btn-success" type="button" id="go-button">
            Go!
          </button>
        </form>
  
        <p id="game-history"></p>
        <button id="reset-game-button" className="btn btn-secondary">
          Reset{" "}
        </button>
      </div>
    );
  };
  
  export default GameView;