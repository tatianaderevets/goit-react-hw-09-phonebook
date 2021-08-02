import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const ContactsList = ({ contacts, onDeleteContacts }) => {
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

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContacts: PropTypes.func.isRequired
}



const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getVisibleContacts(state),
    
});

const mapDispatchToProps = dispatch =>( {
onDeleteContacts: (id) => dispatch(contactsOperation.deleteContact(id)),
})
 

export default connect(mapStateToProps, mapDispatchToProps )(ContactsList);