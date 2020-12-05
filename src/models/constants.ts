import { createFontSizeScale } from "../util/fonts";

export enum stage {
  outerWidth = 500,
  innerWidth = 300,
  columnWidth = 30,
  columns = 12,
  columnGap = (outerWidth - columnWidth * columns) / (columns - 1)
}

export enum colors {
  redAlpha5 = "rgba(255, 0, 0, 0.05)"
}

export enum fonts {
  displayFont = "Georgia, serif",
  copyFont = "'OpenSans', Helvetica, Arial, sans-serif"
}

const baseFontSize = 16;
const { above: stepsAbove, below: stepsBelow } = createFontSizeScale(
  baseFontSize,
  1.25
);
const [small, micro, macro] = stepsBelow.map(s => `${s}px`);
const [midSize, big, large, huge, gigantic] = stepsAbove.map(s => `${s}px`);

export const fontSizes = {
  macro,
  micro,
  small,
  base: `${baseFontSize}px`,
  midSize,
  big,
  large,
  huge,
  gigantic
};
