import { selectIsLoggedin } from 'components/redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ redirectTo, restricted = false, component }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const shouldRestrict = isLoggedIn && restricted;

  return shouldRestrict ? <Navigate to={redirectTo} /> : component;
};

export default PublicRoute;
