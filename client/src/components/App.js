// REACT
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// PAGES
import Home from '../pages/Home';
import Puns from '../pages/Puns';
import Hashtag from '../pages/Hashtag';
import Adjective from '../pages/Adjective';
import Noun from '../pages/Noun';
import Phrase from '../pages/Phrase';
import AddPun from '../pages/AddPun';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/pun/adjective'>
            <Adjective />
          </Route>
          <Route path='/pun/noun'>
            <Noun />
          </Route>
          <Route path='/pun/phrase'>
            <Phrase />
          </Route>
          <Route path='/hashtag'>
            <Hashtag  />
          </Route>
          <Route path='/pun'>
            <Puns />
          </Route>
          <Route path='/create'>
            <AddPun />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
