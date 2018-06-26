import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
        <div  id="hola"class="col s6 amber ">
            <div  class="container">
                <p  class="white-text"> <i class="small material-icons">search</i> Sigue lo que te interesa.</p>
                <p class="white-text"><i class="small material-icons">people</i> Entérate de lo que está hablando la gente.</p>
                <p  class="white-text"><i class="small material-icons">cloud_done</i> Únete a la conversación.</p>
                         
            </div>       
        </div>
      
    );
  }
}

export default Header;
