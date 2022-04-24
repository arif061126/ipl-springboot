import './App.scss';
import {TeamPage} from "./pages/TeamPage";
import {HashRouter, Switch, Route} from 'react-router-dom';
import {MatchPage} from "./pages/MatchPage";
import {HomePage} from "./pages/HomePage";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route path='/' element={<HomePage />} />
                <Route path='/team/:teamName' element={<TeamPage />} />
                <Route path='/team/:teamName/matches/:year' element={<MatchPage />} />
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;


