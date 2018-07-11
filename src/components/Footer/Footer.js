import React, { Component } from 'react';

import  {Paper,Tabs,Tab,Typography  }from '@material-ui/core';


import './Footer.css';

class Footer extends Component {
  render() {
    return (
           
      <Paper className="footer">
        <Tabs
          value={0}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        
          

          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />


        </Tabs>
        <div>
            <Typography className="text_footer" align="center" color="primary" >© 2014 Copyright Text</Typography>
         
          </div>
      </Paper>


    );
  }
}

export default Footer;
