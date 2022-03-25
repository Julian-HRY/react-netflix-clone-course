/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {FilmB as film}  from '../MovieB'
import { Link } from "react-router-dom";
import { ThemeProvider,createTheme,Container,CssBaseline,Box, Avatar, Typography,TextField,FormControlLabel,Grid, Button,Checkbox,Link as link, colors} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './login.css';
import FacebookIcon from '@mui/icons-material/Facebook';

//export default () => <div>My App</div>;

function Login(){

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    const theme = createTheme({
      palette: {
        mode: 'dark',
      },
    });


    return(

        <ThemeProvider theme={theme} >
             <Box
            sx={{
                alignSelf : 'end',
                marginLeft:8                 
            }}
        >
            <img className="logo" src="./img/net.png" alt="Netflix logo" />
        </Box>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
        
       
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            
          }}
        >
          <Typography component="h1" variant="h5" sx={{fontWeight: 'bold'}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate 
          sx={{ 
              mt: 1,
              alignItems : 'center',
              marginBottom : 20
              }}
            >
            <TextField
            className='textField'
              margin="normal"
              variant="outlined"
              fullWidth
              id="email"
              label="Email or phone Number"
              name="email"
              autoComplete="email"
              autoFocus
              color='secondary'
            />
            <TextField
            className='textField'
              margin="normal"        
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            
              <Link to="/Who" className='btn'>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color ='error'
                  
                  sx={{
                    mt: 3,
                    mb: 2,
                    textDecoration: 'none',
                    
                                    }}
                >Sign In </Button>
                </Link>
              
            
            

           
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
              </Grid>
              <Grid item>
               <Button>Need help? ?</Button>
              </Grid>
            </Grid>
          </Box>
          
          <div className='diffCol'><FacebookIcon color='info'/>Login with Facebook</div>
          <div className='diffCol'>New to Netflix ?  <span className='link'><b>Sign Up now</b> </span>
                </div>

        </Box>
            </Container>
        </ThemeProvider>
        // <div>
        //     <link to="/login">Login</link> |{" "}
        //     <link to="/home">home</link>
        //     <link to="/MyList">My List</link>
            
        //     <div>bou</div>
           
        // </div>
        
    )
}

export default Login;