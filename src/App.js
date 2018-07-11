import React, { Component } from 'react';

import './App.css';

import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';


 
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      logg: 0
    }
    this.SetLog = this.SetLog.bind(this);
  }

  SetLog(result){
    this.setState({logg:result})
    console.log(this.state.logg)

  }



  render() {
    var {logg} = this.state
    return (
      
      <div >
      <div className='row'>

     
    
      { logg == 0? <Login SetLog={this.SetLog}/> :
        logg == 1? <Home/> :
        logg == 2? <Signup/>:""}
    
       
      </div>
      <Footer/>
     </div>
      
    );
  }
}

export default App;
