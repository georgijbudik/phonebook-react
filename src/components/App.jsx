import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Appbar from './Appbar/Appbar';
import { fetchCurrentUser } from './redux/auth/authOperations';
import { selectIsFetching } from './redux/auth/authSelectors';
import PrivateRoute from 'PrivateRoute';
import PublicRoute from 'PublicRoute';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import LogIn from 'pages/LogIn';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/LogIn'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetching && (
      // <Flex justifyContent={'center'} alignContent={'center'}>
      //   Refreshing user...
      // </Flex>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<Register />}
                restricted
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<LogIn />}
                restricted
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    )
  );
};
