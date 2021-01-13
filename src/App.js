import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home/'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import NotFound from './pages/NotFound'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/education' component={Education}/>
          <Route exact path='/experience' component={Experience}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/skills' component={Skills}/>
          <Route path='/404' component={NotFound}/>
          <Redirect to='/404'/>
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
