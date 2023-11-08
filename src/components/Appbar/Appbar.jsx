import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggedin } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import { Header, Container } from './Appbar.styled';
import { FcContacts } from 'react-icons/fc';
import Footer from 'components/Footer/Footer';
import AuthNav from 'components/AuthNav/AuthNav';
import MobileMenu from 'components/MobileMenu/MobileMenu';
// import { Suspense } from 'react';
// import { ColorRing } from 'react-loader-spinner';
const Appbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);

  return (
    <>
      <Header>
        <Container>
          <FcContacts size={'3em'} />
          <Heading size="md">PhoneBook</Heading>
        </Container>
        <MobileMenu />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        <Box>
          {/* <Suspense
          fallback={
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          }
        > */}
          <Outlet />
          {/* </Suspense> */}
        </Box>
      </main>

      <Footer />
    </>
  );
};
export default Appbar;
