/* @flow */

const theme = {
  // www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  fontSizes: [48, 32, 24, 20, 16, 14, 12],
  lineHeight: 1.5,
  bold: 600,
  // Basic rhythm for paddings and margins.
  scale: [8, 16, 32, 64],
  colors: {
    // Semantic
    primary: '#08e',
    secondary: '#888',
    info: '#08e',
    success: '#1c7',
    warning: '#f70',
    error: '#f52',
    // Custom
    black: '#333',
    gray: '#ddd',
    white: '#fff',
  },
  border: {
    radius: 2,
    color: 'rgba(0, 0, 0, .25)',
  },
  states: {
    disabled: {
      cursor: 'default',
      opacity: 0.5,
    },
  },
};

export default theme;
