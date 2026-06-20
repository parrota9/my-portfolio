import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import CTA from "./sections/CTA";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CTA />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
