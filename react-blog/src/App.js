import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './containers/Header';
import Footer from './components/Footer/Footer';
import Main from './containers/Main';

function App() {
  return (
    <>
      <Header></Header>

      <Main></Main>

      <Footer></Footer>
    </>
  );
}

export default App;
