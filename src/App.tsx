import "./App.css";
import Home from "./Pages/Home";
import Personal from "./Pages/Personal";
import Settings from "./Pages/Settings";
import Channels from "./Pages/Channels";
import Bottomnav from "./Components/Bottomnav";
import NotifsAndChats from "./Components/NotifsAndChats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Channels" element={<Channels />} />
          <Route path="/NotifsAndChats" element={<NotifsAndChats />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
        <Bottomnav />
      </Router>
    </div>
  );
}

export default App;
