import { useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/contacts-selectors';
import ContactListElem from '../ContactListElem/ContactListElem';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getFilter);
  const normalizeFilter = filter.toLowerCase();
  const filteredContacts =
    contacts &&
    contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));

  return (
    <ol className={s.contacts}>
      {contacts &&
        filteredContacts.map(({ name, id, number }) => (
          <li key={id} className={s.contactsItem}>
            <ContactListElem
              name={name}
              number={number}
              onDelete={() => deleteContact(id)}
            />
          </li>
        ))}
    </ol>
  );
};

export default ContactList;
