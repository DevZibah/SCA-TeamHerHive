import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Stories from './Components/Stories'
import About from './Components/About'
import Audio from './Components/Audio'
import './style/All.css'
const App = () => {
  return (
    <div className='App'>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Stories' component={Stories} />
          <Route exact path='/About' component={About} />
          {/* <Route exact path='/Audio' component={Audio} /> */}
        </Switch>
      </div>
    </div>
  )
}

export default App
