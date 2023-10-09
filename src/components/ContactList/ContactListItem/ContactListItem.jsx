import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { deleteContact } from 'components/redux/contacts/contactOperations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const formattedPhone = number.replace(/ x\d+$/, '');

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li>
      {name}: {formattedPhone}
      <Button colorScheme="orange" h={7} onClick={handleDelete} ml={3}>
        Delete
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
