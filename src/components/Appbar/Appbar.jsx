import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedin } from 'components/redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import { Header, Container } from './Appbar.styled';
import { FcContacts } from 'react-icons/fc';
import Footer from 'components/Footer/Footer';
import AuthNav from 'components/AuthNav/AuthNav';
const Appbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <>
      <Header>
        <Container>
          <FcContacts size={'3em'} />
          <Heading size="md">PhoneBook</Heading>
        </Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Appbar;
