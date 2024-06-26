export const dimensions = {
  fontSizes: {
    '4xs': 6,
    '3xs': 8,
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 26,
    '4xl': 28,
    '5xl': 34,
  },
  borderWidths: {
    '0': 0,
    '0.5': '0.5px',
    '1': '1px',
    '2': '2px',
    '4': '4px',
    '5': '5px',
    '8': '8px',
  },
  radii: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 20,
    '4xl': 24,
    full: 9999,
  },
  spacing: {
    px: '1px',
    '0': 0,
    '0.5': 2,
    '1': 4,
    '1.5': 6,
    '2': 8,
    '2.5': 10,
    '3': 12,
    '3.5': 14,
    '4': 16,
    '4.5': 18,
    '5': 20,
    '6': 24,
    '7': 28,
    '8': 32,
    '9': 36,
    '10': 40,
    '10.25': 42,
    '11': 46,
    '12': 48,
    '12.5': 50,
    '14': 56,
    '16': 64,
    '18': 72,
    '19.5': 78,
    '20': 80,
    '22': 90,
    '24': 96,
    '28': 110,
    '29': 116,
    '32': 128,
    '40': 160,
    '42': 168,
    '48': 192,
    '56': 224,
    '64': 256,
    '72': 288,
    '80': 320,
    '96': 384,
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '2/6': '33.333%',
    '3/6': '50%',
    '4/6': '66.666%',
    '5/6': '83.333%',
    full: '100%',
  },
  container: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  sizes: {},
}
dimensions.sizes = {
  ...dimensions.spacing,
  ...{
    '3xs': 224,
    '2xs': 256,
    xs: 320,
    sm: 384,
    md: 448,
    lg: 512,
    xl: 576,
    '2xl': 672,
  },
  ...dimensions.container,
}
