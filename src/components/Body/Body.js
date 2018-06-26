import React, { Component } from 'react';

import './Body.css';

class Body extends Component {
  render() {
    return (
        <div  class="col s6 center-align">
      
            <p class="black-text"> <i class="small material-icons">search</i> Sigue lo que te interesa.</p>
            <div class="input-field inline ">
                <input id="email_inline" type="email" class="validate"/>
                <label for="email_inline">Email</label>
                
            </div>

        
            
            <div class="col s12">
            
                <a class="waves-effect waves-light btn amber " href="#">registrate</a> 
            
            </div>
            <div class="col s12">
            
                <a class="waves-effect waves-light btn blue " href="#">registrate</a> 
                
            </div>
     
        
        </div>
      
    );
  }
}

export default Body;
