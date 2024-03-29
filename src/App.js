import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home/'
import Projects from './pages/Projects'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Box } from '@chakra-ui/react'

import bgImg from './assets/bg/bg_blue.jpeg'

function App() {

  return (
    <Box
      h = "100%"
      pos="relative"
      bgColor="#04050A"
    >
      <Router>
        <Header/>
        <Contact/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/about' component={About}/>
          <Route path='/404' component={NotFound}/>
          <Redirect to='/404'/>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
