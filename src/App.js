import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/home' exact component={Home} />
      <Route path='/category/*' exact component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
