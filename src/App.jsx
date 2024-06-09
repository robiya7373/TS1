import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Header from './Components/Header/Header';

import Home from './Home';
import Footer from './Components/Footer/Footer';


function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
