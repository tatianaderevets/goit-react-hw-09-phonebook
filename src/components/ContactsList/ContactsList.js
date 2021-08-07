import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import avatar from '../../images/cute_cartoon.png'

import {
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  Grid,
  Container,
  Typography,
  
} from '@material-ui/core';

import useStyles from '../../styles';
import MyButton from '../Button';

import { contactsOperation, contactsSelectors } from "../../redux/contacts";


export default function ContactsList() {
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
     const dispatch = useDispatch();
    const onDeleteContacts = (id) => dispatch(contactsOperation.deleteContact(id));
    const classes = useStyles();
return (
    <>
        <CssBaseline />
        <Container maxWidth="md" className={classes.cardCrid}>
            <Grid container spacing={4}>
    {contacts.map(({ id, name, number }) => (
        <Grid key={id} item xs={12} sm={6}>
            <Card className={classes.card}>
            <CardMedia
                  className={classes.cardMedia}
                  image={avatar} width="100%"
                  title="imgTitle"
                />
            <CardContent className={classes.cardContent}>
                  <Typography variant="h5"> {name + ':'} </Typography>
                  <Typography variant="h5">{number}</Typography>
                  
            </CardContent>
                
                <MyButton
                    title={'Delete'} 
                    onClick={() => onDeleteContacts(id)}/>
        
            </Card>
        </Grid>
        
    ))}
            
                
                </Grid>
        </Container>
         </>
    );
}


