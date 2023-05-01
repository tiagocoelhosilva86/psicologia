
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
// import Home from './components/home/home';
// import Maps from './components/maps/maps';



function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        {/* <Home/> */}
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      
      <Footer/>
      
    </div>
  );
}

export default App;
