import Profile from "./apps/1/Profile";
import BChanger from "./apps/2/BChanger";
import ParaGenerator from "./apps/4/ParaGenerator";
import GitHub from "./apps/5/GitHub";
import OTP from "./apps/6/OTP";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./Links";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/1" element={<Profile />} />
          <Route path="/2" element={<BChanger />} />
          <Route path="/4" element={<ParaGenerator />} />
          <Route path="/5" element={<GitHub />} />
          <Route path="/6" element={<OTP />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
