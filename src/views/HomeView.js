import React from 'react';
import img from '../images/happy_woman.png'
import { CssBaseline, Typography, Container } from '@material-ui/core';



const HomeView = () => (
    <Container maxWidth="sm">
         <CssBaseline />
        <>
           <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            style={{ marginTop: '60px' }}
          >
            Phonebook
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            Hi there!
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            My name is Tania and this is my first application! 
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
                Try to use it, but first register!
                
            </Typography>
            <img src={img} alt="happy girl"width="280px" />

        
        </>
        </Container>
);

export default HomeView;
