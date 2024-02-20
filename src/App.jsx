import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Landingpage from './components/LandingPage/Landingpage';
import Home from './components/HomePage/Home';
import Downloads from './components/Downloads/Downloads';
import Contact from './components/Contact/Contact';

function App() {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Let's Cook Something 👩🏽‍🍳!!";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/downloads" element={<Layout><Downloads /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
