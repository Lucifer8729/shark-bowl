import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@material-ui/core/Divider';



const signin = () => {
    return (
       
      <Grid container component="main" p={10} sx={{ height: '100vh'}}  >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/signup.png)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '50%'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left'
            }}
          >
            <Typography pb={1} component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
              Let's Get Started
            </Typography>
            <Typography pb={1} pt={1} >
              Don't have an account? <Typography display="inline" style={{color: 'red'}} >Sign Up</Typography>
            </Typography>
            <Grid container pb={1} pt={1} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }} sx={{ alignItems: 'center'}}>
                <Grid item xs={6}>
                    <img  src="/group1.png" p={1} width={207} height={47} alt="google-logo"/>
                    </Grid>
                <Grid item xs={6}>
                    <img  src="/Group 27.png" p={1} width={207} height={47} alt="linkedin-logo"/>
                    </Grid>
            </Grid>
            <Divider sx={{ borderBottomWidth: 50 }} />
            <Divider sx={{ borderBottomWidth: 50 }} />
            
            <Box component="form" noValidate sx={{ mt: 1 }}>
            
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb:0 }}
              >
                Sign In
              </Button>
             
            </Box>
          </Box>
        </Grid>
      </Grid>
   
        
    )
}

export default signin