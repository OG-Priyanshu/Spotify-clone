import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundLayout from "./Components/BackgroundLayout";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <Router>
      <BackgroundLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BackgroundLayout>
    </Router>
  );
}

export default App;