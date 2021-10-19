import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
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
