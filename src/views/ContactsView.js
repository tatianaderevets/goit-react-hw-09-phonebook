import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/ContactForm";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter";
import { contactsOperation, contactsSelectors } from '../redux/contacts'





export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingcontacts = useSelector(contactsSelectors.getLoading);
  useEffect(() => {
dispatch(contactsOperation.fetchContacts())
  }, [dispatch])

  

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



