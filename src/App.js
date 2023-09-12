import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <body className="App">
        <header>
          <Nav />
        </header>
        <Main />
        <Footer />
      </body>
    </>
  );
}

export default App;
