import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screen/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
