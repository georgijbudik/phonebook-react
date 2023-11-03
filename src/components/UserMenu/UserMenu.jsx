import { logOut } from 'components/redux/auth/authOperations';
import { selectUserName } from 'components/redux/auth/authSelectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/login');
  };
  return (
    <Flex
      alignItems="center"
      ml={'auto'}
      display={{ base: 'none', md: 'flex' }}
    >
      <span>
        <BiSolidUser />
      </span>
      <Text as="b" ml={1}>
        Welcome, {name}
      </Text>

      <Button type="button" colorScheme="orange" onClick={handleLogOut} ml={5}>
        Logout
      </Button>
    </Flex>
  );
};

export default UserMenu;
