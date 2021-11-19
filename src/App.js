import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Circle from './Circle';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/circle">
              <Circle />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
