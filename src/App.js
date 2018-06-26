import React, { Component } from 'react';
import './styles/materialize.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div >
      <div className='row'>
        <Header/>
        <Body/>
      </div>
      <Footer/>
     </div>
      
    );
  }
}

export default App;
