import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from "@fluentui/react-components";

export const brand: BrandVariants = {
  10: "#292929", // Background Color 
  20: "#53C0EB", // Blue Color 
  30: "#FFD15D", // 
  40: "#40596B",
  50: "#711F0E",
  60: "#872611",
  70: "#9C2F16",
  80: "#B0391C",
  90: "#C54423",
  100: "#D8512B",
  110: "#EB5E35",
  120: "#FC6D41",
  130: "#FF875D",
  140: "#FF9F7C",
  150: "#FFB69A",
  160: "#FFCBB7",
};

export const darkTheme: Theme = {
  ...createDarkTheme(brand),
  colorNeutralBackground1: brand[10], 
  colorNeutralStroke1: brand [20],
  colorNeutralStroke1Hover: brand [20],
  colorCompoundBrandBackground: brand[30],
  colorCompoundBrandBackgroundHover: brand[30],
  colorNeutralForegroundInverted: brand[40]
};