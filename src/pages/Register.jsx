import { Flex, Stack, Heading, Text } from '@chakra-ui/react';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
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
        <RegisterForm />
      </Stack>
    </Flex>
  );
};

export default Register;
