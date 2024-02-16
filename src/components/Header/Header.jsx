import { Container, StyledHeader } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedin } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcContacts } from 'react-icons/fc';
import AuthNav from 'components/AuthNav/AuthNav';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { Heading } from '@chakra-ui/react';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <StyledHeader>
      <Container>
        <Link style={{ display: 'flex', alignItems: 'center' }} to={'/'}>
          <FcContacts size={'3em'} />
          <Heading size="md">PhoneBook</Heading>
        </Link>
      </Container>
      <MobileMenu />
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};

export default Header;
