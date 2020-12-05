/**
 * reusable style objects for styled components
 *
 */

import { fonts, fontSizes } from "./constants";

export const baseFontProps = {
  fontFamily: fonts.copyFont,
  fontSize: fontSizes.base,
  fontWeight: 400
};
export const displayFontProps = {
  ...baseFontProps,
  fontFamily: fonts.displayFont
  // letterSpacing: "0.01em",
};

// -03 macro
export const macroRegular = {
  ...baseFontProps,
  fontSize: fontSizes.macro
};
export const macroSemiBold = {
  ...macroRegular,
  fontWeight: 600
};
export const macroBold = {
  ...macroRegular,
  fontWeight: 700
};

// -02 micro
export const microRegular = {
  ...baseFontProps,
  fontSize: fontSizes.micro
};
export const microSemiBold = {
  ...microRegular,
  fontWeight: 600
};
export const microBold = {
  ...microRegular,
  fontWeight: 700
};

// -01 small
export const smallRegular = {
  ...baseFontProps,
  fontSize: fontSizes.small
};
export const smallSemiBold = {
  ...smallRegular,
  fontWeight: 600
};
export const smallBold = {
  ...smallRegular,
  fontWeight: 700
};

// 00 base
export const baseRegular = {
  ...baseFontProps
};
export const baseSemiBold = {
  ...baseFontProps,
  fontWeight: 600
};
export const baseBold = {
  ...baseFontProps,
  fontWeight: 700
};
export const baseItalic = {
  ...baseFontProps,
  fontStyle: "italic"
};

// +01 midSize
export const midSizeRegular = {
  ...baseFontProps,
  fontSize: fontSizes.midSize
};
export const midSizeSemiBold = {
  ...midSizeRegular,
  fontWeight: 600
};
export const midSizeBold = {
  ...midSizeRegular,
  fontWeight: 700
};
export const midSizeRegularDisplay = {
  ...displayFontProps,
  fontSize: fontSizes.midSize
};
export const midSizeBoldDisplay = {
  ...displayFontProps,
  fontSize: fontSizes.midSize,
  fontWeight: 700
};

// +02 big
export const bigRegular = {
  ...baseFontProps,
  fontSize: fontSizes.big
};
export const bigSemiBold = {
  ...bigRegular,
  fontWeight: 600
};
export const bigBold = {
  ...bigRegular,
  fontWeight: 700
};
export const bigRegularDisplay = {
  ...displayFontProps,
  fontSize: fontSizes.big
};
export const bigBoldDisplay = {
  ...displayFontProps,
  fontSize: fontSizes.big,
  fontWeight: 700
};

// +03 large
export const largeRegular = {
  ...baseFontProps,
  fontSize: fontSizes.large
};
export const largeSemiBold = {
  ...largeRegular,
  fontWeight: 600
};
export const largeBold = {
  ...largeRegular,
  fontWeight: 700
};
export const largeRegularDisplay = {
  ...displayFontProps,
  fontSize: fontSizes.large
};
export const largeBoldDisplay = {
  ...displayFontProps,
  fontSize: fontSizes.large,
  fontWeight: 700
};

// +04 huge
export const hugeRegular = {
  ...baseFontProps,
  fontSize: fontSizes.huge
};
export const hugeSemiBold = {
  ...hugeRegular,
  fontWeight: 600
};
export const hugeBold = {
  ...hugeRegular,
  fontWeight: 700
};
export const hugeBoldDisplay = {
  ...displayFontProps,
  fontWeight: 700,
  fontSize: fontSizes.huge
};

// +05 gigantic
export const giganticRegular = {
  ...baseFontProps,
  fontSize: fontSizes.gigantic
};
export const giganticSemiBold = {
  ...giganticRegular,
  fontWeight: 600
};
export const giganticBold = {
  ...giganticRegular,
  fontWeight: 700
};
