import {
    BrandVariants,
    Theme,
    createLightTheme,
    createDarkTheme,
  } from "@fluentui/react-components";
  
  export const brand: BrandVariants = {
    10: "#020305",
    20: "#131623",
    30: "#1B243E",
    40: "#213054",
    50: "#263C6C",
    60: "#2B4884",
    70: "#30559D",
    80: "#3462B7",
    90: "#3770D2",
    100: "#3A7EEE",
    110: "#558BF8",
    120: "#739AF9",
    130: "#8CA8FB",
    140: "#A2B7FC",
    150: "#B8C6FD",
    160: "#CCD6FE",
  };
  
  export const lightTheme: Theme = {
    ...createLightTheme(brand),
    colorBrandForeground1: brand[20],
  };
  
  export const darkTheme: Theme = {
    ...createDarkTheme(brand),
    colorBackgroundOverlay: brand[50],
  };
  
  darkTheme.colorBrandForeground1 = brand[130];

  