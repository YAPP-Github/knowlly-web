import { DefaultTheme } from 'styled-components';
const color = {
  /* primary */
  primary: {
    basic: '#FF9534',
    dark: '#FF7A00',
    light: '#FFF4EB',
  },
  /* secondary */
  secondary: {
    lime: '#C7E02A',
    limeLight: '#F4F9D4',
    limeDark: '#A5BB1B',
    indigo: '#172351',
    indigoLight: '#F0F4FF',
  },

  /* grayscale */
  gray: {
    FF: '#FFFFFF',
    F7: '#F7F7F7',
    EF: '#EFEFEF',
    DD: '#DDDDDD',
    CC: '#CCCCCC',
    '8F': '#8F8F8F',
    '6B': '#6B6B6B',
    '44': '#444444',
    '00': '#000000',
  },
  /* system color */
  system: {
    red: '#E72749', //error
    blue: '#779DFF', //success
    dimmed: 'rgba(0, 0, 0, 0.6)', //dimmed
  },
};

const Theme: DefaultTheme = {
  color,
};

export default Theme;
