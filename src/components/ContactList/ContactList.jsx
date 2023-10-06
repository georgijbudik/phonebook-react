import ContactListItem from 'components/ContactList/ContactListItem';
import { selectFilteredContacts } from 'components/redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
        ></ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
