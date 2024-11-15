import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Settings from "./pages/Settings";
import Channels from "./pages/Channels";
import Footer from "./components/Footer";
import NotifsAndChats from "./pages/NotifsAndChats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[330px] flex justify-center relative bg-black">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Channels" element={<Channels />} />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/NotifsAndChats" element={<NotifsAndChats />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
