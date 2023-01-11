import logo from './logo.svg';
import './App.css';
import { Signup } from './components/pages/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Signup/>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
