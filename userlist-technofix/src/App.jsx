import { Router, Route, Switch } from 'react-router-dom';
import UserList from './Components/UserList'
import UserDetails from './Components/UserDetails'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserList}/>
        <Route path="/user/:id" component={UserDetails}/>
      </Switch>
    </Router>
  )
}

export default App
