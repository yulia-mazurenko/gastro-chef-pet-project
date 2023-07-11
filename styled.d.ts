import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backGroundMenu: string;
      inputBackground: string;
      accentColor: string;
      attentionColor: string;
      text: string;
      whiteText: string;
      blackText: string;
      validationRedText: string;
    };
    space: string[];
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };

    borders: {
      none: string;
      normal: string;
      bold: string;
      active: string;
    };
    radii: {
      none: string;
      normal: string;
      round: string;
    };
    shadows: {
      normal: string;
      accent: string;
    };
    effects: {
      mainEffect: string;
    };
  }
}
