import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
