import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/details" element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
