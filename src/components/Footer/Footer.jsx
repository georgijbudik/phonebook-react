import {
  Box,
  useColorModeValue,
  Container,
  Stack,
  Heading,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box pt={5} maxHeight={'10vh'}>
      <footer>
        <Box
          bg={useColorModeValue('orange.500', 'orange')}
          color={useColorModeValue('white')}
          boxShadow={
            '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
          }
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={'center'}
            align={{ base: 'center', md: 'center' }}
          >
            <Heading as={'b'} fontSize={{ base: 'sm', sm: 'lg', md: 'lg' }}>
              © 2023 Georgii Budik. All rights reserved
            </Heading>
          </Container>
        </Box>
      </footer>
    </Box>
  );
};

export default Footer;
