import React, { Component } from "react";
import shortid from "shortid";
import s from './ContactForm.module.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { contactsOperation, contactsSelectors } from '../../redux/contacts';
import MyButton from '../Button';

import { Container, Input, InputAdornment } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';





class Form extends Component {

    static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

    state = {
        name: '',
        number: ''
    };

    nameInputId = shortid.generate();

    handleChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    this.setState({[name]: value});
    };

    handleSubmit = event => {
        const { contacts, onSubmit } = this.props;
        const { name, number } = this.state;
        
        event.preventDefault();
        // console.log(this.state);
        contacts.find((contact) => contact.name === name)
      ? alert(`This person ${name} is already in contacts`)
      : contacts.find((contact) => contact.number === number)
      ? alert(`This number ${number} is already in contacts`)
      : onSubmit(this.state);
        // this.props.onSubmit(this.state);
        this.reset();

    };

    reset = () => {
        this.setState({ name: '', number: '' });
    }
    
    render() {
      return (
          <Container maxWidth="sm">
          <form onSubmit={this.handleSubmit}>
             <div className={s.phonebookInputFields}>
        <label htmlFor={this.nameInputId} className="phonebook-label">
          
        
      <Input
                className={s.phonebookInput}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                }
        type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
        name="name"
                  id={this.nameInputId}
                  placeholder="Tatiana Derevets"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="The name can only consist of letters, apostrophes, dashes and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        
        />
        </label>
        <label className="phonebook-label">
         
         <Input
                startAdornment={
                  <InputAdornment position="start">
                    <CallIcon />
                  </InputAdornment>
                }
            type="tel"
            className={s.phonebookInput}
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title='The phone number must be 11-12 digits long and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +'
  placeholder="+380688888888"
                  required
/>
        </label>
              <MyButton title={'Add contact'} />
              </div>
          </form>
          </Container>
        );
    }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) =>{
        return dispatch(contactsOperation.addContact(name, number))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);

