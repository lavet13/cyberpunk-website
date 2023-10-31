import {
  defineStyle,
  SystemStyleFunction,
  StyleFunctionProps,
  SystemStyleObject,
} from '@chakra-ui/react';

const styles = {
  // same as using defineStyle
  global: (props: StyleFunctionProps): SystemStyleObject => ({
    '.active-link': {
      display: 'flex',
    },
  }),
};

export default styles;