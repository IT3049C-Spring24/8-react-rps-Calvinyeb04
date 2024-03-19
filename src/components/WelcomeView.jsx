const WelcomeView = (props) => {
    return (
      <div id="welcome-screen">
        <form id="name-form">
          <div className="form-group">
            <label htmlFor="username">Type your name: </label>
            <input
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
          <button className="btn btn-primary" id="start-game-button" type="button">
            Start Game!
          </button>
        </form>
      </div>
    );
  };
    export default WelcomeView;


  