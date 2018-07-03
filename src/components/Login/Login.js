import React, { Component } from 'react';

import './Login.css';
include('../../conexion/index.php');
class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            nombre:'',
            contraseña:''
        }
        this.login=this.login.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    login(){

        console.log("Login function");
    }
    onChange(e){

        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    }



  render() {
    return (

        <div>
            <div  id="hola"className="col s6 teal darken-4  ">
            <div  id="texto" className="container">
                <p  className="white-text"> <i className="small material-icons">search</i> Sigue lo que te interesa.</p>
                <p className="white-text"><i className="small material-icons">people</i> Entérate de lo que está hablando la gente.</p>
                <p  className="white-text"><i className="small material-icons">cloud_done</i> Únete a la conversación.</p>
                         
            </div>       
        </div>
        <div  className="col s6 right">
        <form action = "" method = "post" name="login">

            <center>
                <div  className="input-field inline">
                    <input  placeholder="email" id="email_inline" type="email" onChange={this.onChange} />
                    
                </div>
                <div className="input-field inline">
                        <input placeholder="contraseña" id="contraseña_inline" type="password" onChange={this.onChange}  />
                </div>
                
                <input name="loginSubmit" type="submit" className="waves-effect waves-light btn cyan  darken-2 " value="Iniciar sesión" /> 
               
            </center>

        </form>
           

        </div>
          <div id="registro" className="col s6 center-align">
      
            <p className="black-text"> <i className="small material-icons">search</i> Sigue lo que te interesa.</p>
            <br/>           
        
            <div className="col s12">
            
                <a className="waves-effect waves-light btn cyan darken-2  " href="/signup" >registrate</a> 
                
            </div>
   
      
      </div>
        </div>
 
    );
  }
}

export default Login;
