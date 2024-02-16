import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Appbar from './Appbar/Appbar';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import { Toaster } from 'react-hot-toast';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Register from 'pages/Register';
import LogIn from 'pages/LogIn';

const ContactsPage = lazy(() => import('../pages/Contacts'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/LogIn'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
