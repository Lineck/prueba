import React, { Component } from 'react';
import './styles/materialize.min.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div >
      <div className='row'>
        <Header/>
        <Login/> 
        <Body/>
      </div>
      <Footer/>
     </div>
      
    );
  }
}

export default App;
