import { Flex } from '@chakra-ui/react';
import { Link } from 'components/Navigation/Navigation.styled';
const AuthNav = () => {
  return (
    <Flex ml={'auto'} display={{ base: 'none', md: 'flex' }}>
      <Link to="/login">Log In</Link>
      <Link className="last-child" to="/register">
        Sign Up
      </Link>
    </Flex>
  );
};

export default AuthNav;
