import './App.css';
import GameView from './components/GameView';
import WelcomeView from './components/WelcomeView';

function App() {
  return (
    <div class="container">
      <h1 class="mainHeader">Rock Paper Scissors</h1>
      <WelcomeView />
      <GameView />
    </div>
  );
}

export default App;