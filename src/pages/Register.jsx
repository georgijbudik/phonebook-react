import { Flex, Stack, Heading, Text } from '@chakra-ui/react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsFetching } from 'redux/auth/authSelectors';

const Register = () => {
  const isFetching = useSelector(selectIsFetching);

  return (
    !isFetching && (
      <Flex justify={'center'} minH={'80vh'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={{ base: '3xl', lg: '4xl' }} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to save your worldwide contacts 📞
            </Text>
          </Stack>
          <RegisterForm />
        </Stack>
      </Flex>
    )
  );
};

export default Register;
