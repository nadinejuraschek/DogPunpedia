import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import AddPun from '../pages/AddPun';
import Adjective from '../pages/Adjective';
import Hashtag from '../pages/Hashtag';
import Home from '../pages/Home';
import Noun from '../pages/Noun';
import Phrase from '../pages/Phrase';
import Puns from '../pages/Puns';

const App = () => (
  <Router>
    <Routes>
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
    </Routes>
  </Router>
);

export default App;
