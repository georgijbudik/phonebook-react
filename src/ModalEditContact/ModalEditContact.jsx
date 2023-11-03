import {
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Modal,
} from '@chakra-ui/react';
import { updateContact } from 'components/redux/contacts/contactOperations';
import { styles } from 'helpers/notificationStyles';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const ModalEditContact = ({ isOpen, onClose, name, number, id }) => {
  const [nameValue, setNameValue] = useState(name);
  const [numberValue, setNumberValue] = useState(number);
  const dispatch = useDispatch();
  const handleUpdate = e => {
    e.preventDefault();
    const contact = {
      name: nameValue,
      number: numberValue,
    };
    dispatch(updateContact({ contactId: id, contact }));
    toast.success('You successfully updated contact', styles);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your contact</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleUpdate}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  value={nameValue}
                  onChange={e => setNameValue(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Number</FormLabel>
                <Input
                  value={numberValue}
                  onChange={e => setNumberValue(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="orange" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalEditContact;
