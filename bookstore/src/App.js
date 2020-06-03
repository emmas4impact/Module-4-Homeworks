import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/MyNav";
import Footer from "./components/MyFooter";
import Welcomes from "./components/Welcome"
import Latest from './components/LatestRelease';

function App() {
  return (
    <div className="App">
     <NavBar title="Book Store" />
     <Welcomes />
     <Latest />
     <Footer />
    </div>
  );
}

export default App;
