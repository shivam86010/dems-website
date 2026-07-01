import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/Index";

import Home from "./pages/HomePage";
import Solutions from "./pages/SolutionsPage";
import Industries from "./pages/IndustriesPage";
import Features from "./pages/FeaturesPage";
import Security from "./pages/SecurityPage";
import Resources from "./pages/ResourcesPage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/features" element={<Features />} />
          <Route path="/security" element={<Security />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
