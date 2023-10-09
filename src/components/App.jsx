import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';
import Appbar from './Appbar/Appbar';
import { fetchCurrentUser } from './redux/auth/authOperations';
import { selectIsFetching } from './redux/auth/authSelectors';
import PrivateRoute from 'PrivateRoute';
import PublicRoute from 'PublicRoute';
import NotFound from 'pages/NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetching && (
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
