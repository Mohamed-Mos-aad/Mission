import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ConfirmEmail from './pages/ConfirmEmail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Mission" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="Mission/confirmEmail" element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
