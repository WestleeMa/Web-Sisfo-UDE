import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return (
    <Router>
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
