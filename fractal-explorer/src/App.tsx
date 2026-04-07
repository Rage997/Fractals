import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { FractalPage } from './pages/FractalPage';
import './styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<FractalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
