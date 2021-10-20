import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import AboutUs from './pages/aboutUsPage/AboutUs';
import HomePage from './pages/homePage/HomePage';
import ServicesPage from './pages/servicesPage/ServicesPage';
import BlogsPage from './pages/blogPage/BlogPage';
import ContactsPage from './pages/contactsPage/ContactsPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/services' component={ServicesPage} />
          <Route path='/blog' component={BlogsPage} />
          <Route path='/contacts' component={ContactsPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
