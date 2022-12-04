import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PokemonDetailsPage from './pages/PokemonDetailsPage';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* Navbar will be display in all routes */}
        <Navbar />
        <div className='container'>
          <Switch>
            {/* the :id param is used in this route to fetch the data of a specific pokemon and displays in the PokemonDetailsPage */}
            <Route path='/pokemons/:id' component={PokemonDetailsPage} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
