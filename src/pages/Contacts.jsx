import { Box, Container } from '@chakra-ui/react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/auth/authSelectors';

const Contacts = () => {
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedin);

  const dispatch = useDispatch();
  useEffect(() => {
    isLoggedIn && dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <Container>
      <Box minH={'80vh'}>
        <ContactForm />
        <Filter />
        {error && <b>Error!</b>}
        <ContactList />
      </Box>
    </Container>
  );
};

export default Contacts;
