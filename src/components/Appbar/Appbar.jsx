import { selectIsFetching } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import Header from 'components/Header/Header';

const Appbar = () => {
  const isFetching = useSelector(selectIsFetching);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={isFetching ? <Loader /> : null}>
          <Box>
            <Outlet />
          </Box>
          {isFetching && <Loader />}
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
export default Appbar;
