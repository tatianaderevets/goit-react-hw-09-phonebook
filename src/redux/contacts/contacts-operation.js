import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    featchContactRequest,
    featchContactSuccess,
    featchContactError
} from './contacts-actions';


// axios.defaults.baseURL = 'http://localhost:4040';


const fetchContacts = () => dispatch => {
    dispatch(featchContactRequest());

    axios.get('/contacts')
        .then(({ data }) => dispatch(featchContactSuccess(data)))
        .catch(error => dispatch(featchContactError(error.message)));
}

const addContact = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number
    }

    dispatch(addContactRequest());

    axios.post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)));

}

export default {
    addContact,
    deleteContact,
    fetchContacts

}
