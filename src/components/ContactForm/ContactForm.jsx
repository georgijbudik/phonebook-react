import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import {
  Box,
  FormLabel,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  ScaleFade,
  Input,
  Button,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import toast from 'react-hot-toast';
import { styles } from 'helpers/notificationStyles';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const onSubmit = ({ name, number }, actions) => {
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      toast(`${name} is already in contacts`, { ...styles, icon: 'ℹ️' });
      return;
    }

    dispatch(addContact({ name, number }));
    toast.success('You have successfully added a contact', styles);
    actions.resetForm();
  };

  return (
    <Stack spacing={6} mx={'auto'} maxW={'lg'} py={6} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={{ base: '3xl', lg: '4xl' }} textAlign={'center'}>
          This is your PhoneBook
        </Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          here you can add contacts
        </Text>
      </Stack>
      <ScaleFade initialScale={0.7} in>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={20} w={{ base: 'none', md: 350 }}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({
                values: { name, number },
                handleChange,
                handleSubmit,
                errors,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <FormLabel htmlFor={nameInputId}>Name</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      name="name"
                      value={name}
                      pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      onChange={handleChange}
                      id={nameInputId}
                    />
                    <FormLabel htmlFor={telInputId}>Number</FormLabel>
                    <Field
                      as={Input}
                      type="tel"
                      name="number"
                      value={number}
                      pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      onChange={handleChange}
                      id={telInputId}
                    />

                    <Button
                      type="submit"
                      colorScheme="orange"
                      isLoading={isLoading}
                    >
                      Add contact
                    </Button>
                  </Stack>
                </form>
              )}
            </Formik>
          </Stack>
        </Box>
      </ScaleFade>
    </Stack>
  );
};

export default ContactForm;
