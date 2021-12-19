import './App.css';
import CharacterList from './pages/CharacterList';
import { Routes, Route } from 'react-router-dom';
import Character from './pages/Character';
import { Search } from './pages/Search';

const App = ()=> {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<CharacterList/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path='/:id' element={<Character/>}/>
      </Routes>
    </div>
  );
}

export default App;
