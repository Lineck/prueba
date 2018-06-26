import React, { Component } from 'react';

import './Body.css';

class Body extends Component {
  render() {
    return (
        <div id="registro" class="col s6 center-align">
      
            <p class="black-text"> <i class="small material-icons">search</i> Sigue lo que te interesa.</p>
           <br/>           
        
            <div class="col s12">
            
                <a class="waves-effect waves-light btn cyan " href="#">registrate</a> 
                
            </div>
     
        
        </div>
      
    );
  }
}

export default Body;
