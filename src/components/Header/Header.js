import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
        <div  className="col s6 right">
        
          <center>
            <div  className="input-field inline">
              <input  placeholder="email" id="email_inline" type="email" />
                
            </div>
            <div className="input-field inline">
                  <input placeholder="contraseña" id="contraseña_inline" type="password" />
            </div>
            <a className="waves-effect waves-light btn cyan " href="#">Iniciar sesión</a> 
          </center>

        </div>
      
    );
  }
}

export default Header;
