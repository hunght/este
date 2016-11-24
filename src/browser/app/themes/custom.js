/* @flow */
import initial from './initial';

const theme = {
  ...initial,
  fontSizes: [46, 30, 22, 18, 14, 12, 10],
  lineHeight: 2,
  colors: {
    ...initial.colors,
    primary: '#6496c8',
    black: '#555',
  },
};

export default theme;
