import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomeExp from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <HomeExp />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
