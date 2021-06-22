import './styles/styles.scss';
import Cards from './components/Cards';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CreateProfile from './components/CreateProfile';
import EditProfile from './components/EditProfile';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
        <Route exact path='/' component={Cards}></Route>
          <Route exact path='/user/create' component={CreateProfile} />
          <Route exact path='/:id/edit-card' component={EditProfile} />
          <Route exact path='/:id' component={UserDetail} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
