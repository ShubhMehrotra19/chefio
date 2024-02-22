import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Landingpage from './components/LandingPage/Landingpage';
import Home from './components/HomePage/Home';
import Downloads from './components/Downloads/Downloads';
import Contact from './components/Contact/Contact';
import Aboutus from './components/About/Aboutus';
import Pricing from './components/About/Pricing';
import Error from './components/Error/Error';
import Recipies from './components/Recipies/Recipies';
import Description from './components/Recipies/RecipieDescription/Description';
import Chefio from './components/Chefio/Chefio';

function App() {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Let's Cook Something 👩🏽‍🍳!!";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chefio-global" element={<Layout><Chefio /></Layout>} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/downloads" element={<Layout><Downloads /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><Aboutus /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/recipes" element={<Layout><Recipies /></Layout>} />
        <Route path="/recipes/:id" element={<Layout><Description /></Layout>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
