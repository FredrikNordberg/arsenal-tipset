// App.jsx
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ScoreTable from "./components/ScoreTable";
import HowToPlay from "./pages/Rules";
import Fixtures from "./pages/Fixtures";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4 space-y-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tabell" element={<ScoreTable />} />
            <Route path="/hur-man-spelar" element={<HowToPlay />} />
            <Route path="/matcher" element={<Fixtures />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}