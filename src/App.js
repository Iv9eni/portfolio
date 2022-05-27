import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 

import Home from "./Components/Home";
import ProjectPage from "./Components/ProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<ProjectPage />} />
        <Route path="/project2" element={<ProjectPage />} />
        <Route path="/project3" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
