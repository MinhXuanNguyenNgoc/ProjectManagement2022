import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeRoutes from "./routes/homeRoutes";
import AuthenRoutes from "./routes/authenRoutes";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/authentication/*" element={<AuthenRoutes />} />

        <Route path="/*" element={<HomeRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
