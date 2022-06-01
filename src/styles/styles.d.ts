import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      /* primary */
      primary: {
        basic: string;
        dark: string;
        light: string;
      };
      /* secondary */
      secondary: {
        lime: string;
        limeLight: string;
        limeDark: string;
        indigo: string;
        indigoLight: string;
      };
      /* grayscale */
      gray: {
        FF: string;
        F7: string;
        EF: string;
        DD: string;
        CC: string;
        '8F': string;
        '6B': string;
        '44': string;
        '00': string;
      };
      /* system color */
      system: {
        red: string; //error
        blue: string; //success
      };
    };
  }
}
