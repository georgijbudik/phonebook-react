import { signUp } from 'redux/auth/authOperations';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  ScaleFade,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Field, Formik } from 'formik';
import toast from 'react-hot-toast';
import { styles } from 'helpers/notificationStyles';
const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const onSubmit = async ({ name, email, password }, actions) => {
    try {
      await dispatch(signUp({ name, email, password })).unwrap();
      actions.resetForm();
    } catch (error) {
      toast.error(error, styles);
    }
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
  return (
    <Flex justify={'center'} minH={'82.8vh'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={{ base: '3xl', lg: '4xl' }} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to save your worldwide contacts 📞
          </Text>
        </Stack>
        <ScaleFade initialScale={0.7} in>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={{ base: 6, lg: 8 }}
          >
            <Stack spacing={20} w={{ md: 350 }}>
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({
                  values: { name, email, password },
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                      <FormControl isRequired>
                        <FormLabel htmlFor={nameInputId}>Name</FormLabel>
                        <Field
                          as={Input}
                          autoComplete="off"
                          type="text"
                          name="name"
                          value={name}
                          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                          onChange={handleChange}
                          id={nameInputId}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel htmlFor={emailInputId}>Email</FormLabel>
                        <Field
                          as={Input}
                          autoComplete="off"
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          id={emailInputId}
                        />
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.password && touched.password}
                        isRequired
                      >
                        <FormLabel htmlFor={passwordInputId}>
                          Password
                        </FormLabel>
                        <InputGroup>
                          <Field
                            as={Input}
                            autoComplete="off"
                            name="password"
                            value={password}
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChange}
                            id={passwordInputId}
                            validate={validatePassword}
                          />

                          <InputRightElement h={'full'}>
                            <Button
                              variant={'ghost'}
                              onClick={() =>
                                setShowPassword(showPassword => !showPassword)
                              }
                            >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                      <Stack spacing={10} pt={2}>
                        <Button
                          type="submit"
                          loadingText="Submitting"
                          size="lg"
                          colorScheme="orange"
                        >
                          Sign up
                        </Button>
                      </Stack>
                      <Stack pt={6}>
                        <Text align={'center'}>
                          Already a user?
                          <Link
                            style={{
                              color: '#66bfbf',
                              marginLeft: '6px',
                              textDecoration: 'underline',
                            }}
                            to="/login"
                          >
                            Login
                          </Link>
                        </Text>
                      </Stack>
                    </Stack>
                  </form>
                )}
              </Formik>
            </Stack>
          </Box>
        </ScaleFade>
      </Stack>
    </Flex>
  );
};

export default Register;
