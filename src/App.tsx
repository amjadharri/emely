import React from "react";
import { Home } from "./views/Home";
import { Verification } from "./views/Verification";
import { Create } from "./views/Create";
import { Password } from "./views/Password";
import { Route, Routes } from "react-router";
export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/create" element={<Create />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </div>
  );
};
