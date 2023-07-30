import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/reports' component={Reports} />
        <Route exact path='/products' component={Products} />
      </Switch> 
    </Router>
    </div>
  );
}

export default App;
