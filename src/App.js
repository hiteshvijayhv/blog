import './App.css';
import Blog from './components/Blog'
import Home from './components/Home'
import PostDisplay from './components/PostDisplay'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/blogs' exact component={Blog} />
            <Route path='/blogs/:postdisplay' component={PostDisplay} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
