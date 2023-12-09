import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage.js';
import Truth from './components/Truth.js';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="truth" element={<Truth colorTheme={'light'} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
