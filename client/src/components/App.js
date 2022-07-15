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
      <Route path='/pun/adjective' element={<Adjective />} />
      <Route path='/pun/noun' element={<Noun />} />
      <Route path='/pun/phrase' element={<Phrase />} />
      <Route path='/hashtag' element={<Hashtag />} />
      <Route path='/pun' element={<Puns />} />
      <Route path='/create' element={<AddPun />} />
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
);

export default App;
