import React from 'react';
import {AppBar,Toolbar,Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const Layout = props => {


const useStyles = makeStyles((theme) => ({
  base: {
        flexGrow: 1,
     
  },

  title: {
    flexGrow: 1,
  },
}));


  const classes = useStyles();

 


        return (
            <div>
                 <div style={{marginBottom:'5px'}} className={classes.base}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            HNGi7 LeaderBoard
          </Typography>
          <Button onClick={props.clicked} color="inherit">Admin</Button>
        </Toolbar>
      </AppBar>
    </div>
                <main
                  //  className={classes.Content}
                >

            {props.children}
            </main>
        
            </div>
              
          

        )
    

}




export default Layout