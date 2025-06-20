import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact_us from "./pages/Contact-us";
import Identite from './pages/Identite';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact_us />} />
                <Route path="/identite" element={<Identite />} />
            </Routes>
        </Router>
    );
}

export default App;