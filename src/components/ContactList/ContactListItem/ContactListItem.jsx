import { useDispatch } from 'react-redux';
import { Heading, IconButton, useDisclosure } from '@chakra-ui/react';
import { deleteContact } from 'redux/contacts/contactOperations';
import { DeleteIcon } from '@chakra-ui/icons';
import { styles } from 'helpers/notificationStyles';
import toast from 'react-hot-toast';
import { AiOutlineEdit } from 'react-icons/ai';
import ModalEditContact from 'ModalEditContact/ModalEditContact';

const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formattedPhone = item.phone.replace(/ x\d+$/, '');

  const handleDelete = () => {
    dispatch(deleteContact(item));
    toast.success('You have successfully deleted a contact', styles);
  };

  return (
    <li>
      <Heading size={'sm'} display={'inline-block'}>
        {item.name}
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
        name={item.name}
        phone={item.phone}
        id={item._id}
      />
    </li>
  );
};

export default ContactListItem;
