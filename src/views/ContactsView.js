// import './App.css';
import { Component } from "react";
import { connect } from "react-redux";
// import Container from "../components/Container";
import Form from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter";
import { contactsOperation, contactsSelectors } from '../redux/contacts'


class ContactsView extends Component {

  state = {

  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {


    return (
      <>
        <div >
          {this.props.isLoadingcontacts && <h2>Loading...</h2>}
          <Form />

          
          <Filter />
          

          <ContactsList />

        </div>
      </>

    );
  }
}

const mapStateToProps = state => ({
  isLoadingcontacts: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperation.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
