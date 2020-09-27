import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import { UserProvider } from './UserContext'

const App = () => {
  const content = (
    <>
      <UserProvider>
        <CardContent />
      </UserProvider>
    </>
  )
  return content
}

const CardContent = () => {
  const content = (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      {/* 1<UserProvider> */}
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      {/* </UserProvider> */}
    </Router>
  )
  return content
}

export default App
