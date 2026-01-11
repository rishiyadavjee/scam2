import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from "./Dashboard/Dashboard";
import StudentInfo from "./StudentInfo/StudentInfo";

const App = () => {
  return (
    <BrowserRouter>
   
       <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/student" element={<StudentInfo />} />
</Routes>

    
    </BrowserRouter>
  );
};

export default App;
