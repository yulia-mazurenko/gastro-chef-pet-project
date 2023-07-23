// my-theme.ts
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    background: "#E5E5E5",
    backGroundMenu: "#DEE6EE",
    inputBackground: "#DEE6EE",
    accentColor: "#64D370",
    activeColor: "#3D9646",
    attentionColor: "#F35353",
    text: "#020202",
    whiteText: "#F5FAFF",
    blackText: "#000000",
    validationRedText: "#F87676",
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "26px",
    xxl: "30px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  borders: {
    none: "none",
    normal: "1px solid",
    bold: "3px solid",
    active: "2px solid",
  },
  radii: {
    none: "0",
    normal: "5px",
    round: "50%",
  },
  shadows: {
    normal: "0px 0px 30px rgba(86, 86, 86, 0.3)",
    accent: "0px 0px 40px rgba(86, 86, 86, 0.3)",
  },
  effects: {
    mainEffect: "450ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export { theme };
