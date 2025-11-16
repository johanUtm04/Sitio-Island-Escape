import './App.css'; 

import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Characters from './components/Characters';
import Footer from './components/Footer';
import Community from './components/Community';
import Download from './components/Download';
import Contact from './components/Contact';
import History from './components/History';
import About from './components/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = () => (
  <main>
    <Hero />
    <News />
    <Characters />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/descargar" element={<Download />} /> 
            <Route path="/comunidad" element={<Community />} /> 
            <Route path="/contacto" element={<Contact />} /> 
            <Route path="/historia" element={<History />} /> 
            <Route path="/acerca" element={<About />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;