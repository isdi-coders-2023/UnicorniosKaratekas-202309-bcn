import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      green: string;
      orange: string;
      pink: string;
      lilac: string;
    };
    typography: {
      family: string;
      dark: string;
      light: string;
      white: string;
    };
  }
}
