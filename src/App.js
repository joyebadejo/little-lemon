import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
