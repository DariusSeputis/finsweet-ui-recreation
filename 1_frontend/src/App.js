import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
          <Route path='/about' />
          <Route path='/services' />
          <Route path='/blog' />
          <Route path='/contacts' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
