import React, { Component } from 'react';
import './styles/materialize.min.css';
import './App.css';

import Footer from './components/Footer/Footer';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div >
      <div className='row'>
  
     
        <Routes/>
       
      </div>
      <Footer/>
     </div>
      
    );
  }
}

export default App;
