import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsFetching, selectIsLoggedin } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import { Header, Container } from './Appbar.styled';
import { FcContacts } from 'react-icons/fc';
import Footer from 'components/Footer/Footer';
import AuthNav from 'components/AuthNav/AuthNav';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';

const Appbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const isFetching = useSelector(selectIsFetching);

  return (
    <>
      <Header>
        <Container>
          <Link style={{ display: 'flex', alignItems: 'center' }} to={'/'}>
            <FcContacts size={'3em'} />
            <Heading size="md">PhoneBook</Heading>
          </Link>
        </Container>
        <MobileMenu />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>

      <main>
        <Suspense fallback={isFetching ? <Loader /> : null}>
          <Box>
            <Outlet />
          </Box>
          {isFetching && <Loader />}
          {!isFetching && <Footer />}
        </Suspense>
      </main>
    </>
  );
};
export default Appbar;
