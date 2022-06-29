import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import ProjectsPage from "./components/pages/ProjectsPage";
import BlogPage from "./components/pages/BlogPage";
import AboutmePage from "./components/pages/AboutmePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/aboutme" element={<AboutmePage />} />
      </Routes>
    </>
  );
}

export default App;