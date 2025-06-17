
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Solutions from './components/solutions.jsx'
import Contact from './components/Contact-us.jsx'
import Footer from './components/Footer.jsx'
function App() {


    return (
        <>
            <div className='hero-content'>
                <Header />
                <Hero />
            </div>
            <Services />
            <Solutions />
            <Contact />
            <Footer />

        </>
    )
}
export default App
