import { useDispatch } from 'react-redux';
import { Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactOperations';
import { DeleteIcon } from '@chakra-ui/icons';
import { styles } from 'helpers/notificationStyles';
import toast from 'react-hot-toast';
import { AiOutlineEdit } from 'react-icons/ai';
import ModalEditContact from 'ModalEditContact/ModalEditContact';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formattedPhone = number.replace(/ x\d+$/, '');

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success('You have successfully deleted a contact', styles);
  };

  return (
    <li>
      <Heading size={'sm'} display={'inline-block'}>
        {name}
      </Heading>
      : {formattedPhone}
      <IconButton
        icon={<AiOutlineEdit />}
        colorScheme="orange"
        h={7}
        ml={3}
        onClick={onOpen}
      ></IconButton>
      <IconButton
        onClick={handleDelete}
        icon={<DeleteIcon />}
        h={7}
        ml={3}
        colorScheme="orange"
      ></IconButton>
      <ModalEditContact
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        number={number}
        id={id}
      />
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
