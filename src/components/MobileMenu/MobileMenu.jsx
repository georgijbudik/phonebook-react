import { logOut } from 'components/redux/auth/authOperations';
import {
  Menu,
  Icon,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { BiLogOut, BiHomeCircle, BiSolidContact } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedin } from 'components/redux/auth/authSelectors';
import { BiUser } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';

const MobileMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = path => {
    navigate(path);
  };
  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/login');
  };
  return (
    <Box ml={'auto'} display={{ base: 'flex', sm: 'flex', md: 'none' }}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          colorScheme="orange"
        />
        <MenuList>
          <MenuItem
            onClick={() => handleNavigate('/')}
            icon={<Icon as={BiHomeCircle} h={4} w={4} />}
          >
            <Link to="/">Home</Link>
          </MenuItem>
          {isLoggedIn && (
            <>
              <MenuItem
                onClick={() => handleNavigate('contacts')}
                icon={<Icon as={BiSolidContact} h={4} w={4} />}
              >
                Contacts
              </MenuItem>
              <MenuItem
                onClick={handleLogOut}
                icon={<Icon as={BiLogOut} h={4} w={4} />}
              >
                Logout
              </MenuItem>
            </>
          )}
          {!isLoggedIn && (
            <>
              <MenuItem
                onClick={() => handleNavigate('login')}
                icon={<Icon as={BiUser} h={4} w={4} />}
              >
                Login
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate('register')}
                icon={<Icon as={BsPencil} h={4} w={4} />}
              >
                Signup
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MobileMenu;
