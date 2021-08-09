import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './components/Main'
import About from './components/About'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  )
}

export default App
