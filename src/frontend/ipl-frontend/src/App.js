import './App.scss';
import {TeamPage} from "./pages/TeamPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import {MatchPage} from "./pages/MatchPage";
import {HomePage} from "./pages/HomePage";

function App() {
  return (
      <div className="App">
          <HashRouter>
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/team/:teamName' element={<TeamPage />} />
                  <Route path='/team/:teamName/matches/:year' element={<MatchPage />} />
              </Routes>
          </HashRouter>
      </div>
  );
}

export default App;