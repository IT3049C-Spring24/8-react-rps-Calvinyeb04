const WelcomeView = (props) => {
    return (
      <div id="welcome-screen">
        <form id="name-form">
          <div class="form-group">
            <label for="username">Type your name: </label>
            <input
              class="form-control"
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter Name Here..."
              minlength="2"
              maxlength="15"
            />
          </div>
          <button class="btn btn-primary" id="start-game-button" type="button">
            Start Game!
          </button>
        </form>
      </div>
    );
  };
  
  export default WelcomeView;
  