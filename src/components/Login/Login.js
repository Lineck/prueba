import React, { Component, Fragment } from 'react';

import './Login.css';
import  {Typography,Grid, Paper,Button  }from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import color from '@material-ui/core/colors/purple';



class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            contraseña:'',
                     
        }
        this.login=this.login.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    login(){
        console.log(this.state);

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange= ()=> {

            if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

                var usuario = xmlhttp.responseText; 
                console.log(usuario)
                if(usuario=="true"){
                    this.props.SetLog(1);

                }
               
             

            }else{

            }
         }        
         
         xmlhttp.open("POST","http://localhost/build/server/checklogin.php",true);
         xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         xmlhttp.send("email="+this.state.email+"&contrasenia="+this.state.contraseña);

        
    }
    
    onChange(e){

        this.setState({[e.target.name]: e.target.value})

    }



  render() {


    return (

        <div>
           
           
            <Grid container spacing={24}>
                <Grid className="iconos" item xs={6}  >
                    <div className="hola" style={{padding:40} }>
                        <p className="text"><i className="small material-icons">search</i> Sigue lo que te interesa.</p>
                        <p className="text"><i className="small material-icons">people</i>Entérate de lo que está hablando la gente.</p>
                        <p className="text"><i className="small material-icons">cloud_done</i>Únete a la conversación.</p>
                    </div >
               
                </Grid>

                <Grid item xs={6}  >

                    <Grid item xs={12}  >

                        <div  className="text_log">
                        
                                <TextField  name="email" placeholder="email" id="email_inline" type="email" onChange={(e)=>this.onChange(e)}></TextField>
                            
                                <TextField name="contraseña" placeholder="contraseña" id="contraseña_inline" type="password" onChange={(e)=>this.onChange(e)}></TextField>
                        
                            <Button name="loginSubmit" variant="contained"  color="primary" onClick={()=>this.login()} >Iniciar sesión</Button> 
                        </div >
                    </Grid >
                    <Grid item xs={12}  >

                         <div  className="text2_log">
                        <p > <i className="small material-icons">search</i> Sigue lo que te interesa.</p>
                        <br/>           
                       <Button className="btn-log" variant="contained"  color="primary" onClick={() => this.props.SetLog(2)} >registrate</Button> 
                        
                        </div>
                    </Grid >
               
                </Grid>
     
            </Grid>
            
        
       

          
        </div>
 
    );
  }


}

export default Login;
