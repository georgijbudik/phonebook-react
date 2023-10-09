import { selectIsLoggedin } from 'components/redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo, component }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
