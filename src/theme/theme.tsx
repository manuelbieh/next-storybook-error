import { extendTheme } from '@chakra-ui/react';

import {
  borderRadius as radii,
  BrandColor,
  breakpoints,
  Color,
  fonts,
  fontSizes,
  lineHeights,
  space,
} from './themeConst';

const baseColors = {
  white: Color.PRIMARY_WHITE,
  primaryBlack: Color.PRIMARY_BLACK,
  secondaryBlack: Color.SECONDARY_BLACK,
  tertiaryBlack: Color.TERTIARY_BLACK,
  primaryGray: Color.PRIMARY_GRAY,
  secondaryGray: Color.SECONDARY_GRAY,
  lightGray: Color.LIGHT_GRAY,
  tertiaryGray: Color.TERTIARY_GRAY,
  primaryLightGray: Color.PRIMARY_LIGHT_GRAY,
  secondaryLightGray: Color.SECONDARY_LIGHT_GRAY,
  primaryRed: Color.PRIMARY_RED,
  primaryYellow: Color.PRIMARY_YELLOW,
  primaryGreen: Color.PRIMARY_GREEN,
  primaryBlue: Color.PRIMARY_BLUE,
  brandDefault: BrandColor.DEFAULT,
};

const theme = (brand: string = BrandColor.DEFAULT) =>
  extendTheme({
    config: {
      initialColorMode: 'light',
    },
    colors: {
      base: {
        ...baseColors,
      },
      background: {
        ...baseColors,
      },
      text: {
        ...baseColors,
      },
      border: {
        ...baseColors,
      },
      icon: {
        ...baseColors,
      },
      brand: {
        default: brand,
      },
    },
    breakpoints,
    fonts,
    fontSizes,
    lineHeights,
    radii,
    space,
  });

export default theme;
