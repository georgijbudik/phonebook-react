import { Container, UnorderedList } from '@chakra-ui/react';
import ContactListItem from 'components/ContactList/ContactListItem';
import { selectFilteredContacts } from 'components/redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Container width={400} mt={3}>
      <UnorderedList spacing={3}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
          ></ContactListItem>
        ))}
      </UnorderedList>
    </Container>
  );
};

export default ContactList;
