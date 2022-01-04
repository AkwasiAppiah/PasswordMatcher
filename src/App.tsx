import React from 'react';
import './App.css';
import Header from './components/Header';
import PasswordComparer from './components/PasswordComparer/PasswordComparer';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header/>
        <PasswordComparer/>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
