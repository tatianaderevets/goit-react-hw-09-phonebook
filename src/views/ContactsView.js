// import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Container from "../components/Container";
import Form from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter";
import { contactsOperation, contactsSelectors } from '../redux/contacts'


// const mapStateToProps = state => ({
//   isLoadingcontacts: contactsSelectors.getLoading(state),
// })

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperation.fetchContacts())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);


export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingcontacts = useSelector(contactsSelectors.getLoading);
  useEffect(() => {
dispatch(contactsOperation.fetchContacts())
  }, [dispatch])

  // state = {

  // };

  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

    return (
      <>
        <div >
          {isLoadingcontacts && <h2>Loading...</h2>}
          <Form />

          
          <Filter />
          

          <ContactsList />

        </div>
      </>

    );
  }



