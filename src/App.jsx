import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPageMain from "./Components/landing-page";
import ProMain from "./Components/pro-page/ProMain";
import Signup from "./Components/sign-up/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPageMain />} />
        <Route path="/pro" element={<ProMain />} />
        <Route path="/payment-success" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
