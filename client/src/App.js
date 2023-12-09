import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage.js';
import SecondaryPage from './components/SecondaryPage.js';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="truth" element={<SecondaryPage colorTheme={'light'} path={'truth'} />} />
        <Route path="dare" element={<SecondaryPage colorTheme={'dark'} path={'dare'} />} />
        <Route path="game" element={<SecondaryPage colorTheme={'light'} path={'game'} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
