import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import HomeContainer from './containers/home-container';
import AboutContainer from './containers/about-container';
import NonAuthContainer from './containers/nonauth-container';
import NotFoundContainer from './containers/notfound-container';
import AuthRoute from './components/auth-route';

function RouterTemplate() {
  return (
    <Router>
      <nav className='nav-bar'>
        <div className='nav-links'>
          <Link className='link-btn' to='/'>
            Home Page
          </Link>
          <Link className='link-btn' to='/about'>
            About Page
          </Link>
        </div>
      </nav>
      <div className='content-wrapper'>
        <Switch>
          <AuthRoute authed exact path='/' component={HomeContainer} />
          <AuthRoute authed={false} path='/about' component={AboutContainer} />
          <AuthRoute
            authed
            path='/unaouthorized'
            component={NonAuthContainer}
          />
          <AuthRoute authed component={NotFoundContainer} />
        </Switch>
      </div>
    </Router>
  );
}
export default RouterTemplate;
