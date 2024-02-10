import { selectIsRememberedMe } from 'redux/auth/authSelectors';
import { logIn } from 'redux/auth/authOperations';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormLabel,
  Input,
  Button,
  Stack,
  useColorModeValue,
  Box,
  Text,
  FormControl,
  ScaleFade,
  Checkbox,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import toast from 'react-hot-toast';
import { styles } from 'helpers/notificationStyles';
import { changeRememberMe } from 'redux/auth/authSlice';
import { validatePassword } from 'helpers/validatePassword';

const LoginForm = () => {
  const isRememberedMe = useSelector(selectIsRememberedMe);
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const validateEmail = value => {
    let error;
    if (!value) {
      error = 'Email is required';
    }
    return error;
  };

  const onSubmit = async ({ email, password }, actions) => {
    try {
      await dispatch(logIn({ email, password })).unwrap();
      actions.resetForm();
    } catch (error) {
      toast.error('Wrong email or password', styles);
    }
  };

  return (
    <ScaleFade initialScale={0.7} in>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={{ base: 6, lg: 8 }}
      >
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({
            values: { email, password },
            handleChange,
            handleSubmit,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack spacing={4} mb={3}>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor={emailInputId}>Email</FormLabel>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    id={emailInputId}
                    validate={validateEmail}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor={passwordInputId}>Password</FormLabel>
                  <Field
                    as={Input}
                    autoComplete="off"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    id={passwordInputId}
                    validate={validatePassword}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              </Stack>
              <Stack spacing={8}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Field
                    as={Checkbox}
                    onChange={() => dispatch(changeRememberMe(!isRememberedMe))}
                    checked={isRememberedMe}
                    colorScheme="orange"
                    name="rememberMe"
                    id="rememberMe"
                  >
                    Remember me
                  </Field>
                  <Text color={'#66bfbf'}>Forgot password?</Text>
                </Stack>
                <Button type="submit" colorScheme="orange">
                  Login
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </ScaleFade>
  );
};

export default LoginForm;
