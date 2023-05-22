import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FetchAPI from './useparam/FetchAPI';
import Singlepage from './useparam/Singlepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<FetchAPI/>}></Route>
        <Route exact path='/:id' element={<Singlepage/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
