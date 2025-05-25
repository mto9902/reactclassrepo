import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import NotFoundPage from './Pages/NotFoundPage'

function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
        <Route exact path='*' component={NotFoundPage}/>
      </Switch>
    </Router>
  )
}

export default App
