import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomeExp from './components/Home/HomeExp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <HomeExp />
      </BrowserRouter>
    </>
  );
}

export default App;
