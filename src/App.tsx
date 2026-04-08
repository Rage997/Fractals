import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { FractalPage } from './pages/FractalPage';
import './styles/globals.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<FractalPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
