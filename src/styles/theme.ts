import { DefaultTheme } from 'styled-components';
const color = {
  /* primary */
  orange: {
    basic: '#FF9534',
    dark: 'FF7A00',
    light: '#FFF4EB',
  },
  /* secondary */
  lime: {
    basic: '#C7E02A',
    dark: '#A5BB1B',
    light: '#F4F9D4',
  },
  indigo: {
    basic: '#172351',
    light: '#F0F4FF',
  },
  /* grayscale */
  gray: {
    grayFF: '#FFFFFF',
    grayF7: '#F7F7F7',
    grayEF: '#EFEFEF',
    grayDD: '#DDDDDD',
    grayCC: '#CCCCCC',
    gray8F: '#8F8F8F',
    gray6B: '#6B6B6B',
    gray44: '#444444',
    gray00: '#000000',
  },
  /* system color */
  system: {
    red: '#E72749', //error
    blue: '#779DFF', //success
  },
};

const Theme: DefaultTheme = {
  color,
};

export default Theme;
