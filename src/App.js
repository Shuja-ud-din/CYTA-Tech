import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Work from './pages/Work';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <helmet>
          <title>
            CYTA Tech | Digital Marketing Agency Driving Revenue
          </title>
          <meta name="description" content={"CYTA Tech is a top Digital Marketing Agency in Australia. Strengthen brand identity, promote online presence & increase engagement and Conversions."} />
        </helmet>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Work' element={<Work />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
