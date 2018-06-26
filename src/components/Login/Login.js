import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  render() {
    return (

        <div>
            <div  id="hola"className="col s6 cyan ">
            <div  id="texto" className="container">
                <p  className="white-text"> <i className="small material-icons">search</i> Sigue lo que te interesa.</p>
                <p className="white-text"><i className="small material-icons">people</i> Entérate de lo que está hablando la gente.</p>
                <p  className="white-text"><i className="small material-icons">cloud_done</i> Únete a la conversación.</p>
                         
            </div>       
        </div>
        <div  className="col s6 right">
        
            <center>
            <div  className="input-field inline">
                <input  placeholder="email" id="email_inline" type="email" />
                
            </div>
            <div className="input-field inline">
                    <input placeholder="contraseña" id="contraseña_inline" type="password" />
            </div>
            <a className="waves-effect waves-light btn cyan " href="/home">Iniciar sesión</a> 
            </center>

        </div>
          <div id="registro" className="col s6 center-align">
      
            <p className="black-text"> <i className="small material-icons">search</i> Sigue lo que te interesa.</p>
            <br/>           
        
            <div className="col s12">
            
                <a className="waves-effect waves-light btn cyan " href="/signup">registrate</a> 
                
            </div>
   
      
      </div>
        </div>
 
    );
  }
}

export default Login;
