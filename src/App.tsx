import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./routes/Router";
import { BrowserRouter as Router } from "react-router-dom";

// 테마

import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Router basename="/parkgs.github.io">
        <AppRouter />
      </Router>
    </>
  );
};

export default App;
