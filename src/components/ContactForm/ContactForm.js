import React, {useState} from "react";
import shortid from "shortid";
import s from './ContactForm.module.css';
import { useSelector, useDispatch} from 'react-redux';
import { contactsOperation, contactsSelectors } from '../../redux/contacts';
import MyButton from '../Button';

import { Container, Input, InputAdornment } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CallIcon from '@material-ui/icons/Call';



export default function Form() {

  const nameInputId = shortid.generate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
const handleChange = (name) => (e) => {
    switch (name) {
      case "name":
        return setName(e.target.value);

      case "number":
        return setNumber(e.target.value);

      default:
        return null;
    }
  };
  


  const contacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();

  const onSubmit =  () =>
    dispatch(contactsOperation.addContact({ name, number }));


  const handleSubmit = event => {
        
        
      event.preventDefault();
        // console.log(this.state);
        contacts.find((contact) => contact.name === name)
      ? alert(`This person ${name} is already in contacts`)
      : contacts.find((contact) => contact.number === number)
      ? alert(`This number ${number} is already in contacts`)
        : onSubmit();
    
    setName("");
    setNumber("");

    };


   return (
          <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
             <div className={s.phonebookInputFields}>
        <label htmlFor={nameInputId} className="phonebook-label">
          
        
      <Input
                className={s.phonebookInput}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                }
        type="text"
                  value={name}
                  onChange={handleChange("name")}
        name="name"
                  id={nameInputId}
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
            value={number}
            onChange={handleChange("number")}
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

