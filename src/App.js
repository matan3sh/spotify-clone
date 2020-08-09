import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './store/actions';
import Home from './components/pages/Home';

function App({ loadUser }) {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = {
  loadUser,
};

export default connect(null, mapDispatchToProps)(App);
