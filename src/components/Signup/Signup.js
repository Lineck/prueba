import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


import './Signup.css';


class Signup extends Component {
  constructor(props){
    super()
    this.state = {
      rut:'',
      rut_error : '',
      nombre:'',
      nombre_error : '',
      apellido:'',
      apellido_error:'',
      correo:'',
      correo_error:'',
      contrasenia:'',
      contrasenia_error:'',
      localidad:'Concepcion',
      localidad_error:''

    }
    this.validar2=this.validar2.bind(this);
    
  }
  validar2(){
    var flag=true;
    console.log("addd");
    if(this.state.rut===''){
      flag=false;
      this.setState({rut_error:'Campo requerido'}); 
    }
    if(this.state.nombre===''){
      flag=false;
      this.setState({nombre_error:'Campo requerido'}); 
    }
    if(this.state.apellido===''){
      flag=false;
      this.setState({apellido_error:'Campo requerido'}); 
    }
    if(this.state.correo===''){
      flag=false;
      this.setState({correo_error:'Campo requerido'}); 
    }
    if(this.state.contrasenia===''){
      flag=false;
      this.setState({contrasenia_error:'Campo requerido'}); 
    }
    if(this.state.localidad===''){
      flag=false;
      this.setState({localidad_error:'Campo requerido'}); 
    }
    return flag;
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  registrar(){

      

         var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange= ()=> {

            if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

                var usuario = xmlhttp.responseText; 
               
             
            }
         }        
          //  xmlhttp.open("POST","../server/checklogin.php",true);
         xmlhttp.open("POST","http://localhost/build/server/registro.php",true);
         xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         xmlhttp.send("rut="+this.state.rut+"&nombre="+this.state.nombre+"&apellido="+this.state.apellido+"&email="+this.state.correo+"&contrasenia="+this.state.contrasenia+"&localidad="+this.state.localidad);

      
       
        

    }

  
  validar(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= ()=> {

        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){

            var usuario = xmlhttp.responseText; 
            console.log(usuario);
            
           if(usuario==="false" ){
             
            this.setState({rut_error:'Rut Existente'});
             
           }else{
             
             if(this.validar2()===true){
                
                  this.registrar(); 
              }else{
                 
              }
           }
         
           


        }
     }       
      //  xmlhttp.open("POST","../server/checklogin.php",true);
     xmlhttp.open("POST","http://localhost/build/server/checkrut.php",true);
     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     xmlhttp.send("rut="+this.state.rut);

  
  }


  render() {
    
    const style = {
    root: {
      paddingTop:12,
      paddingBottom:12,
      paddingLeft:"4%",
      paddingRight:"4%",
      marginTop: 50,
      marginLeft:"20%",
    },
  };
    return (
      <div className="grid" >
      <center>
        <h1 id ="titulo">Registro</h1>
      </center>
        
       <Grid  container spacing={24}>
        <Grid   item xs={12}  >
        
          <TextField 
              style={style.root}
              required={false}
              id="nombre"
              label="Nombre"
              name="nombre"
              onChange={(e) => this.handleChange(e)}
              margin="normal"
              error={this.state.nombre_error == ''? false : true}
              helperText={this.state.nombre_error}
            />
            <TextField 
              style={style.root}
              required={false}
              id="rut"
              label="Rut"
              name="rut"
              onChange={(e) => this.handleChange(e)}
              margin="normal"
              error={this.state.rut_error == ''? false : true}
              helperText={this.state.rut_error}
            /> 
            <TextField
            style={style.root}
              required={false}
              id="apellido"
              label="Apellido"
              name="apellido"
           
              onChange={(e) => this.handleChange(e)}
              margin="normal"
              error={this.state.apellido_error == ''? false : true}
              helperText={this.state.apellido_error}
            /> 
           
          </Grid>
          <Grid  item xs={12}  >

        
            <TextField
               style={style.root}
              required={false}
              id="correo"
              label="Correo"
              name="correo"
              onChange={(e) => this.handleChange(e)}
              margin="normal"
              error={this.state.correo_error == ''? false : true}
              helperText={this.state.correo_error}
            />
            <TextField
             style={style.root}
              required={false}
              id="contrasenia"
              label="Contraseña"
              type="password"
              name="contrasenia"
              onChange={(e) => this.handleChange(e)}
              margin="normal"
              error={this.state.contrasenia_error == ''? false : true}
              helperText={this.state.contrasenia_error}
            />
           
            </Grid>
            <Grid  item xs={12}  >
            
          
             <InputLabel style={{marginLeft:"20%",marginTop: 50,paddingTop:"5%",paddingLeft:"4%",paddingRight:"4%",}} htmlFor="age-helper">Ubicacion</InputLabel>
        <br />
        <Select
        style={{marginLeft:"20%",paddingLeft:"4%",paddingRight:"4%",}}
         name="localidad"
         value={this.state.localidad}
         onChange={(e) =>this.handleChange(e)}
          >
            PLACEHOLDER
            <MenuItem value='Concepcion'>Concepcion</MenuItem>
            <MenuItem value='Coronel'>Coronel</MenuItem>
            <MenuItem value='Chiguayante'>Chiguayante</MenuItem>
            <MenuItem value='Florida'>Florida</MenuItem>
            <MenuItem value='Hualpen'>Hualpen</MenuItem>
            <MenuItem value='Hualqui'>Hualqui</MenuItem>
            <MenuItem value='Lota'>Lota</MenuItem>
            <MenuItem value='San pedro de la paz'>San Pedro de la Paz</MenuItem>
            <MenuItem value='Santa Juana'>Santa Juana</MenuItem>
            <MenuItem value='Talcahuano'>Talcahuano</MenuItem>
            <MenuItem value='Tome'>Tome</MenuItem>
            <MenuItem value='Penco'>Penco</MenuItem>
          </Select>
            <div id="btn-registro" style={{marginLeft:"60%",marginBottom:"5%"}}>
                  <Button   variant="contained" color="primary" onClick={()=>this.validar()} >REGISTRAR</Button>
            </div>
            
         
            </Grid>

            
               
        </Grid>

       
      </div>
    );
  }
}

export default Signup;
