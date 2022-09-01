import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    base: {
      50: '#FAFAFA',
      100: '#F3F2F2',
      200: '#EDEDED',
      300: '#E6E5E5',
      400: '#D7D5D5',
      500: '#8D8686',
      600: '#574F4D',
      700: '#403937',
      800: '#272221',
    },
    purple: {
      100: '#EBE5F9',
      500: '#8047F8',
      800: '#4B2995',
    },
    yellow: {
      100: '#F1E9C9',
      500: '#DBAC2C',
      800: '#C47F17',
    },
  },
  fonts: {
    heading: `'Baloo 2', cursive`,
    body: `'Roboto', sans-serif`,
  },
  text: {
    lineHeight: '130%',
  },
  heading: {
    lineHeight: '160%',
  },
});
