import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home = () => {
  const text = 'Welcome to the phone contact storage app! 👀';
  return (
    <Flex pt={250} justify={'center'} textAlign={'center'} minH={'80vh'}>
      <motion.div>
        {text.split('').map((letter, index) => (
          <motion.span
            className="text"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.07 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </Flex>
  );
};

export default Home;
