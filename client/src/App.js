import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import TeamDetails from './views/TeamDetails';
import Main from './views/Main';
import EditTeam from './views/EditTeam';

function App() {

  
  return (
    <div class="App">
      <div className="body">
        <h1 class="beach">FBS Matchup Generator</h1>
        <Router>
          <Main path="/" />
          <TeamDetails path="/:id" />
          <EditTeam path="/edit/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
