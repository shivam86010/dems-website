// // App.tsx
// import Routers from "./routers/Index";

// function App() {
//   return (
//     <>
//       <Routers />
//     </>
//   );
// }

// export default App;


// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Website/Layout/Index';
import HomePage from './Website/pages/HomePage';
import AboutPage from './Website/pages/AboutPage';
import ContactPage from './Website/pages/ContactSection';
import SolutionsPage from './Website/pages/SolutionsPage';
import IndustriesPage from './Website/pages/IndustriesPage';
import FeaturesPage from './Website/pages/FeaturesPage';
import SecurityPage from './Website/pages/SecurityPage';
import ResourcesPage from './Website/pages/ResourcesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
