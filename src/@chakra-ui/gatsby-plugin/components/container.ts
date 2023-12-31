import { defineStyleConfig } from '@chakra-ui/react';

const Container = defineStyleConfig({
  baseStyle: {
    w: '100%',
    maxW: 'container.xl',
    px: [2, 4, 6],
  },

  defaultProps: {
    colorScheme: 'gray',
  },
});

export default Container;
