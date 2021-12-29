import React from 'react';
import './App.css';
import Header from './components/Header';
import PasswordComparer from './components/PasswordComparer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <PasswordComparer/>
      <Footer/>
    </div>
  );
}

export default App;
