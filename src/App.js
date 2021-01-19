import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home/'
import Projects from './pages/Projects'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Box } from '@chakra-ui/react'


function App() {
  return (
    <Box
      h = "100%"
      pos= "relative"
      bgImage={"url('img/bg/bg_alt.jpeg')"}
      bgPos="center -20%"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor="#f2f2f2"
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

        <Footer/>
      </Router>
    </Box>
  );
}

export default App;
