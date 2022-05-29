import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      /* primary */
      orange: {
        basic: string;
        dark: string;
        light: string;
      };
      /* secondary */
      lime: {
        basic: string;
        dark: string;
        light: string;
      };
      indigo: {
        basic: string;
        light: string;
      };
      /* grayscale */
      gray: {
        grayFF: string;
        grayF7: string;
        grayEF: string;
        grayDD: string;
        grayCC: string;
        gray8F: string;
        gray6B: string;
        gray44: string;
        gray00: string;
      };
      /* system color */
      system: {
        red: string; //error
        blue: string; //success
      };
    };
  }
}
