import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Contact_us from "./pages/Contact-us";
import Identite from './pages/Identite';
import Expertise from './pages/Expertise';
import Formation from './pages/formation';
import Integration from './pages/Integration';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact_us />} />
                <Route path="/identite" element={<Identite />} />
                <Route path="/expertise" element={<Expertise />} />
                <Route path="/formation" element={<Formation />} />
                <Route path="/integration" element={<Integration />} />
            </Routes>
        </>

    );
}

export default App;
