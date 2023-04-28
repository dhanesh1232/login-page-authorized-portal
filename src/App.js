import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

import './App.css'
import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <div className="main-page">
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <NotFound />
    </Switch>
  </div>
)

export default App
