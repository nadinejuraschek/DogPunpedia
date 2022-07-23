import { AddPun, Adjective, Hashtag, Home, Noun, Phrase, Puns } from '../pages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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
