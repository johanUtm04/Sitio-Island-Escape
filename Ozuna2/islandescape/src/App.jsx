import './App.css'; 
import { Suspense, lazy } from 'react';
const Footer = lazy(() => import( './components/Footer'));
const Header = lazy(() => import( './components/Header'));

const Hero = lazy(() => import( './components/Hero'));
const News = lazy(() => import( './components/News'));
const Characters = lazy(() => import( './components/Characters'));
const Community = lazy(() => import( './components/Community'));
import Download from './components/Download';
const Contact = lazy(() => import( './components/Contact'));
const History = lazy(() => import( './components/History'));
const About  = lazy(() => import( './components/About'));

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