// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Books from "./component/Books";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-136px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
