import { createGlobalStyle } from 'styled-components';

const Font = createGlobalStyle`
@font-face {
  font-family: 'SUIT-Regular';
  font-weight: 400;
  font-display: swap;
  src: url('/assets/fonts/SUIT-Regular.woff2') format('woff2');
}
@font-face {
  font-family: 'SUIT-Medium';
  font-weight: 500;
  font-display: swap;
  src: url('/assets/fonts/SUIT-Medium.woff2') format('woff2');
}
@font-face {
  font-family: 'SUIT-SemiBold';
  font-weight: 600;
  font-display: swap;
  src: url('/assets/fonts/SUIT-SemiBold.woff2') format('woff2');
}
@font-face {
  font-family: 'SUIT-Bold';
  font-weight: 700;
  font-display: swap;
  src: url('/assets/fonts/SUIT-Bold.woff2') format('woff2');
}
`;

export default Font;
