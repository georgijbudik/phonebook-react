import { logIn } from 'components/redux/auth/authOperations';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormLabel,
  Input,
  Button,
  Flex,
  Stack,
  useColorModeValue,
  Box,
  Heading,
  Text,
  FormControl,
  ScaleFade,
  Checkbox,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import toast from 'react-hot-toast';
import { styles } from 'helpers/notificationStyles';
import { selectIsRememberedMe } from 'components/redux/auth/authSelectors';
import { changeRememberMe } from 'components/redux/auth/authSlice';

const LogIn = () => {
  const isRememberedMe = useSelector(selectIsRememberedMe);

  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const validateEmail = value => {
    let error;
    if (!value) {
      error = 'Email is required';
    }
    return error;
  };
  const validatePassword = value => {
    let error;
    if (!value) {
      error = 'Password is required';
    } else if (value.length < 7) {
      error = 'Must be 7 characters or more';
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
    <Flex justify={'center'} minH={'82.8vh'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={{ base: '3xl', lg: '4xl' }} textAlign={'center'}>
            Sign in to your account
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to find your{' '}
            <Text color={'#66bfbf'} display={'inline-block'} as={'b'}>
              contacts ✌️
            </Text>
          </Text>
        </Stack>
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
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
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
                        onChange={() =>
                          dispatch(changeRememberMe(!isRememberedMe))
                        }
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
      </Stack>
    </Flex>
  );
};

export default LogIn;
