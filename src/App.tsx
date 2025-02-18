import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CaptainAmerica } from './pages/CaptainAmerica';
import { IronMan } from './pages/IronMan';
import { Thor } from './pages/Thor';
import { BlackWidow } from './pages/BlackWidow';
import { Hawkeye } from './pages/Hawkeye';
import { Hulk } from './pages/Hulk';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="captain-america" element={<CaptainAmerica />} />
          <Route path="iron-man" element={<IronMan />} />
          <Route path="thor" element={<Thor />} />
          <Route path="black-widow" element={<BlackWidow />} />
          <Route path="hulk" element={<Hulk />} />
          <Route path="hawkeye" element={<Hawkeye />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App