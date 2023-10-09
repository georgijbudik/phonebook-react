import { signUp } from 'components/redux/auth/authOperations';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { selectError } from 'components/redux/selectors';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to save your worldwide contacts 📞
          </Text>
          {error && <Text>Something went wrong, try again!</Text>}
        </Stack>
        <ScaleFade initialScale={0.7} in>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={20} w={'350px'}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel htmlFor={nameInputId}>Name</FormLabel>
                    <Input
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
                    <Input
                      autoComplete="off"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      id={emailInputId}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor={passwordInputId}>Password</FormLabel>
                    <InputGroup>
                      <Input
                        autoComplete="off"
                        name="password"
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        onChange={handleChange}
                        id={passwordInputId}
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
            </Stack>
          </Box>
        </ScaleFade>
      </Stack>
    </Flex>
  );
};

export default Register;
