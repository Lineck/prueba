import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Signup.css';

class Signup extends Component {
  constructor(props){
    super()
    this.state = {
      name:'',
      name_error : ''
    }
    
  }
  validar(){

    if(this.state.name==""){
      this.setState({name_error:'Campo requerido'}); 
    }
  }
  handleSubmit(){

    console.log();
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <Fragment>

        <h1>Pagina de Registro</h1>
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          error={this.state.name_error == ''? false : true}
          helperText={this.state.name_error}
        />        
        <Button variant="contained" color="primary">REGISTRAR</Button>
      </Fragment>
    );
  }
}

export default Signup;
