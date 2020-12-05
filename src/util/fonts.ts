export const createFontSizeScale = (
  baseSize: number,
  factor: number,
  options?: {
    above?: number;
    below?: number;
  }
): {
  above: number[];
  below: number[];
} => {
  // DEFAULT above and below options
  const { above, below } = Object.assign(
    {},
    {
      ...{
        above: 5,
        below: 3
      },
      ...options
    }
  );

  // CREATE FONT SCALE SIZES
  const sizesAbove = [];
  const sizesBelow = [];
  let currentSize = baseSize;

  // sizes above base size
  for (let i = 0; i < above; i++) {
    const nextSize = currentSize * factor;
    sizesAbove.push(nextSize);
    currentSize = nextSize;
  }

  // sizes below base size
  currentSize = baseSize;
  for (let i = 0; i < below; i++) {
    const nextSize = currentSize / factor;
    sizesBelow.push(nextSize);
    currentSize = nextSize;
  }

  return {
    above: sizesAbove,
    below: sizesBelow
  };
};
